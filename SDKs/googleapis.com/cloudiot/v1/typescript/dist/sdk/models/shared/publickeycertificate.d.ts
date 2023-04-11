import { SpeakeasyBase } from "../../../internal/utils";
import { X509CertificateDetails } from "./x509certificatedetails";
/**
 * The certificate format.
 */
export declare enum PublicKeyCertificateFormatEnum {
    UnspecifiedPublicKeyCertificateFormat = "UNSPECIFIED_PUBLIC_KEY_CERTIFICATE_FORMAT",
    X509CertificatePem = "X509_CERTIFICATE_PEM"
}
/**
 * A public key certificate format and data.
 */
export declare class PublicKeyCertificate extends SpeakeasyBase {
    /**
     * The certificate data.
     */
    certificate?: string;
    /**
     * The certificate format.
     */
    format?: PublicKeyCertificateFormatEnum;
    /**
     * Details of an X.509 certificate. For informational purposes only.
     */
    x509Details?: X509CertificateDetails;
}
