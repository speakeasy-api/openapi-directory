import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The mode of the certificate.
 */
export declare enum DomainMappingSpecCertificateModeEnum {
    CertificateModeUnspecified = "CERTIFICATE_MODE_UNSPECIFIED",
    None = "NONE",
    Automatic = "AUTOMATIC"
}
/**
 * The desired state of the Domain Mapping.
 */
export declare class DomainMappingSpec extends SpeakeasyBase {
    /**
     * The mode of the certificate.
     */
    certificateMode?: DomainMappingSpecCertificateModeEnum;
    /**
     * If set, the mapping will override any mapping set before this spec was set. It is recommended that the user leaves this empty to receive an error warning about a potential conflict and only set it once the respective UI has given such a warning.
     */
    forceOverride?: boolean;
    /**
     * The name of the Knative Route that this DomainMapping applies to. The route must exist.
     */
    routeName?: string;
}
