import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Identity delegation history of an authenticated service account.
 */
export declare class ServiceAccountDelegationInfo extends SpeakeasyBase {
    /**
     * The email address of a Google account.
     */
    principalEmail?: string;
    /**
     * A string representing the principal_subject associated with the identity. As compared to `principal_email`, supports principals that aren't associated with email addresses, such as third party principals. For most identities, the format will be `principal://iam.googleapis.com/{identity pool name}/subjects/{subject}` except for some GKE identities (GKE_WORKLOAD, FREEFORM, GKE_HUB_WORKLOAD) that are still in the legacy format `serviceAccount:{identity pool name}[{subject}]`
     */
    principalSubject?: string;
}
