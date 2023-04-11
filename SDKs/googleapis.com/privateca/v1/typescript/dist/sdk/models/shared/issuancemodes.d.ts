import { SpeakeasyBase } from "../../../internal/utils";
/**
 * IssuanceModes specifies the allowed ways in which Certificates may be requested from this CaPool.
 */
export declare class IssuanceModes extends SpeakeasyBase {
    /**
     * Optional. When true, allows callers to create Certificates by specifying a CertificateConfig.
     */
    allowConfigBasedIssuance?: boolean;
    /**
     * Optional. When true, allows callers to create Certificates by specifying a CSR.
     */
    allowCsrBasedIssuance?: boolean;
}
