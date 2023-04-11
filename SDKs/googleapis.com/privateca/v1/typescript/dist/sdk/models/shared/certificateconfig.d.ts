import { SpeakeasyBase } from "../../../internal/utils";
import { PublicKey } from "./publickey";
import { SubjectConfig } from "./subjectconfig";
import { X509Parameters } from "./x509parameters";
/**
 * A CertificateConfig describes an X.509 certificate or CSR that is to be created, as an alternative to using ASN.1.
 */
export declare class CertificateConfig extends SpeakeasyBase {
    /**
     * A PublicKey describes a public key.
     */
    publicKey?: PublicKey;
    /**
     * These values are used to create the distinguished name and subject alternative name fields in an X.509 certificate.
     */
    subjectConfig?: SubjectConfig;
    /**
     * An X509Parameters is used to describe certain fields of an X.509 certificate, such as the key usage fields, fields specific to CA certificates, certificate policy extensions and custom extensions.
     */
    x509Config?: X509Parameters;
}
