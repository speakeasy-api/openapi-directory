import { SpeakeasyBase } from "../../../internal/utils";
import { IdentityConfig } from "./identityconfig";
import { KerberosConfig } from "./kerberosconfig";
/**
 * Security related configuration, including encryption, Kerberos, etc.
 */
export declare class SecurityConfig extends SpeakeasyBase {
    /**
     * Identity related configuration, including service account based secure multi-tenancy user mappings.
     */
    identityConfig?: IdentityConfig;
    /**
     * Specifies Kerberos related configuration.
     */
    kerberosConfig?: KerberosConfig;
}
