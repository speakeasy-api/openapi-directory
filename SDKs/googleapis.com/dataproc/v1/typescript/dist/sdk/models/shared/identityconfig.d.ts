import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Identity related configuration, including service account based secure multi-tenancy user mappings.
 */
export declare class IdentityConfig extends SpeakeasyBase {
    /**
     * Required. Map of user to service account.
     */
    userServiceAccountMapping?: Record<string, string>;
}
