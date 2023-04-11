import { SpeakeasyBase } from "../../../internal/utils";
import { CertificateConfig } from "./certificateconfig";
import { CertificateDescription } from "./certificatedescription";
import { RevocationDetails } from "./revocationdetails";
/**
 * Immutable. Specifies how the Certificate's identity fields are to be decided. If this is omitted, the `DEFAULT` subject mode will be used.
 */
export declare enum CertificateSubjectModeEnum {
    SubjectRequestModeUnspecified = "SUBJECT_REQUEST_MODE_UNSPECIFIED",
    Default = "DEFAULT",
    ReflectedSpiffe = "REFLECTED_SPIFFE"
}
/**
 * A Certificate corresponds to a signed X.509 certificate issued by a CertificateAuthority.
 */
export declare class Certificate extends SpeakeasyBase {
    /**
     * A CertificateDescription describes an X.509 certificate or CSR that has been issued, as an alternative to using ASN.1 / X.509.
     */
    certificateDescription?: CertificateDescription;
    /**
     * Immutable. The resource name for a CertificateTemplate used to issue this certificate, in the format `projects/* /locations/* /certificateTemplates/*`. If this is specified, the caller must have the necessary permission to use this template. If this is omitted, no template will be used. This template must be in the same location as the Certificate.
     */
    certificateTemplate?: string;
    /**
     * A CertificateConfig describes an X.509 certificate or CSR that is to be created, as an alternative to using ASN.1.
     */
    config?: CertificateConfig;
    /**
     * Output only. The time at which this Certificate was created.
     */
    createTime?: string;
    /**
     * Output only. The resource name of the issuing CertificateAuthority in the format `projects/* /locations/* /caPools/* /certificateAuthorities/*`.
     */
    issuerCertificateAuthority?: string;
    /**
     * Optional. Labels with user-defined metadata.
     */
    labels?: Record<string, string>;
    /**
     * Required. Immutable. The desired lifetime of a certificate. Used to create the "not_before_time" and "not_after_time" fields inside an X.509 certificate. Note that the lifetime may be truncated if it would extend past the life of any certificate authority in the issuing chain.
     */
    lifetime?: string;
    /**
     * Output only. The resource name for this Certificate in the format `projects/* /locations/* /caPools/* /certificates/*`.
     */
    name?: string;
    /**
     * Output only. The pem-encoded, signed X.509 certificate.
     */
    pemCertificate?: string;
    /**
     * Output only. The chain that may be used to verify the X.509 certificate. Expected to be in issuer-to-root order according to RFC 5246.
     */
    pemCertificateChain?: string[];
    /**
     * Immutable. A pem-encoded X.509 certificate signing request (CSR).
     */
    pemCsr?: string;
    /**
     * Describes fields that are relavent to the revocation of a Certificate.
     */
    revocationDetails?: RevocationDetails;
    /**
     * Immutable. Specifies how the Certificate's identity fields are to be decided. If this is omitted, the `DEFAULT` subject mode will be used.
     */
    subjectMode?: CertificateSubjectModeEnum;
    /**
     * Output only. The time at which this Certificate was updated.
     */
    updateTime?: string;
}
/**
 * A Certificate corresponds to a signed X.509 certificate issued by a CertificateAuthority.
 */
export declare class CertificateInput extends SpeakeasyBase {
    /**
     * A CertificateDescription describes an X.509 certificate or CSR that has been issued, as an alternative to using ASN.1 / X.509.
     */
    certificateDescription?: CertificateDescription;
    /**
     * Immutable. The resource name for a CertificateTemplate used to issue this certificate, in the format `projects/* /locations/* /certificateTemplates/*`. If this is specified, the caller must have the necessary permission to use this template. If this is omitted, no template will be used. This template must be in the same location as the Certificate.
     */
    certificateTemplate?: string;
    /**
     * A CertificateConfig describes an X.509 certificate or CSR that is to be created, as an alternative to using ASN.1.
     */
    config?: CertificateConfig;
    /**
     * Optional. Labels with user-defined metadata.
     */
    labels?: Record<string, string>;
    /**
     * Required. Immutable. The desired lifetime of a certificate. Used to create the "not_before_time" and "not_after_time" fields inside an X.509 certificate. Note that the lifetime may be truncated if it would extend past the life of any certificate authority in the issuing chain.
     */
    lifetime?: string;
    /**
     * Immutable. A pem-encoded X.509 certificate signing request (CSR).
     */
    pemCsr?: string;
    /**
     * Describes fields that are relavent to the revocation of a Certificate.
     */
    revocationDetails?: RevocationDetails;
    /**
     * Immutable. Specifies how the Certificate's identity fields are to be decided. If this is omitted, the `DEFAULT` subject mode will be used.
     */
    subjectMode?: CertificateSubjectModeEnum;
}
