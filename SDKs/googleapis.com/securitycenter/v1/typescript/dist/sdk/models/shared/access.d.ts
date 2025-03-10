import { SpeakeasyBase } from "../../../internal/utils";
import { Geolocation } from "./geolocation";
import { ServiceAccountDelegationInfo } from "./serviceaccountdelegationinfo";
/**
 * Represents an access event.
 */
export declare class Access extends SpeakeasyBase {
    /**
     * Caller's IP address, such as "1.1.1.1".
     */
    callerIp?: string;
    /**
     * Represents a geographical location for a given access.
     */
    callerIpGeo?: Geolocation;
    /**
     * The method that the service account called, e.g. "SetIamPolicy".
     */
    methodName?: string;
    /**
     * Associated email, such as "foo@google.com". The email address of the authenticated user (or service account on behalf of third party principal) making the request. For third party identity callers, the `principal_subject` field is populated instead of this field. For privacy reasons, the principal email address is sometimes redacted. For more information, see [Caller identities in audit logs](https://cloud.google.com/logging/docs/audit#user-id).
     */
    principalEmail?: string;
    /**
     * A string representing the principal_subject associated with the identity. As compared to `principal_email`, supports principals that aren't associated with email addresses, such as third party principals. For most identities, the format will be `principal://iam.googleapis.com/{identity pool name}/subjects/{subject}` except for some GKE identities (GKE_WORKLOAD, FREEFORM, GKE_HUB_WORKLOAD) that are still in the legacy format `serviceAccount:{identity pool name}[{subject}]`
     */
    principalSubject?: string;
    /**
     * Identity delegation history of an authenticated service account that makes the request. It contains information on the real authorities that try to access GCP resources by delegating on a service account. When multiple authorities are present, they are guaranteed to be sorted based on the original ordering of the identity delegation events.
     */
    serviceAccountDelegationInfo?: ServiceAccountDelegationInfo[];
    /**
     * The name of the service account key used to create or exchange credentials for authenticating the service account making the request. This is a scheme-less URI full resource name. For example: "//iam.googleapis.com/projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}/keys/{key}"
     */
    serviceAccountKeyName?: string;
    /**
     * This is the API service that the service account made a call to, e.g. "iam.googleapis.com"
     */
    serviceName?: string;
    /**
     * What kind of user agent is associated, for example operating system shells, embedded or stand-alone applications, etc.
     */
    userAgentFamily?: string;
    /**
     * A string that represents the username of a user, user account, or other entity involved in the access event. What the entity is and what its role in the access event is depends on the finding that this field appears in. The entity is likely not an IAM principal, but could be a user that is logged into an operating system, if the finding is VM-related, or a user that is logged into some type of application that is involved in the access event.
     */
    userName?: string;
}
