import { SpeakeasyBase } from "../../../internal/utils";
import { CertificateFingerprint } from "./certificatefingerprint";
import { KeyId } from "./keyid";
import { PublicKey } from "./publickey";
import { SubjectDescription } from "./subjectdescription";
import { X509Parameters } from "./x509parameters";
/**
 * A CertificateDescription describes an X.509 certificate or CSR that has been issued, as an alternative to using ASN.1 / X.509.
 */
export declare class CertificateDescription extends SpeakeasyBase {
    /**
     * Describes lists of issuer CA certificate URLs that appear in the "Authority Information Access" extension in the certificate.
     */
    aiaIssuingCertificateUrls?: string[];
    /**
     * A KeyId identifies a specific public key, usually by hashing the public key.
     */
    authorityKeyId?: KeyId;
    /**
     * A group of fingerprints for the x509 certificate.
     */
    certFingerprint?: CertificateFingerprint;
    /**
     * Describes a list of locations to obtain CRL information, i.e. the DistributionPoint.fullName described by https://tools.ietf.org/html/rfc5280#section-4.2.1.13
     */
    crlDistributionPoints?: string[];
    /**
     * A PublicKey describes a public key.
     */
    publicKey?: PublicKey;
    /**
     * These values describe fields in an issued X.509 certificate such as the distinguished name, subject alternative names, serial number, and lifetime.
     */
    subjectDescription?: SubjectDescription;
    /**
     * A KeyId identifies a specific public key, usually by hashing the public key.
     */
    subjectKeyId?: KeyId;
    /**
     * An X509Parameters is used to describe certain fields of an X.509 certificate, such as the key usage fields, fields specific to CA certificates, certificate policy extensions and custom extensions.
     */
    x509Description?: X509Parameters;
}
