import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the service account configuration for the tenant project.
 */
export declare class ServiceAccountConfig extends SpeakeasyBase {
    /**
     * ID of the IAM service account to be created in tenant project. The email format of the service account is "@.iam.gserviceaccount.com". This account ID must be unique within tenant project and service producers have to guarantee it. The ID must be 6-30 characters long, and match the following regular expression: `[a-z]([-a-z0-9]*[a-z0-9])`.
     */
    accountId?: string;
    /**
     * Roles for the associated service account for the tenant project.
     */
    tenantProjectRoles?: string[];
}
