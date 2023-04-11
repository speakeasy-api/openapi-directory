import { SpeakeasyBase } from "../../../internal/utils";
import { CertificateAuthorityServiceConfig } from "./certificateauthorityserviceconfig";
/**
 * The CA that issues the workload certificate. It includes CA address, type, authentication to CA service, etc.
 */
export declare class CertificateAuthorityConfig extends SpeakeasyBase {
    /**
     * Contains information required to contact CA service.
     */
    certificateAuthorityServiceConfig?: CertificateAuthorityServiceConfig;
}
