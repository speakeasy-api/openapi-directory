import { SpeakeasyBase } from "../../../internal/utils";
import { SslCertificateManagedSslCertificate } from "./sslcertificatemanagedsslcertificate";
import { SslCertificateSelfManagedSslCertificate } from "./sslcertificateselfmanagedsslcertificate";
/**
 * (Optional) Specifies the type of SSL certificate, either "SELF_MANAGED" or "MANAGED". If not specified, the certificate is self-managed and the fields certificate and private_key are used.
 */
export declare enum SslCertificateTypeEnum {
    Managed = "MANAGED",
    SelfManaged = "SELF_MANAGED",
    TypeUnspecified = "TYPE_UNSPECIFIED"
}
/**
 * Represents an SSL Certificate resource. Google Compute Engine has two SSL Certificate resources: * [Global](/compute/docs/reference/rest/beta/sslCertificates) * [Regional](/compute/docs/reference/rest/beta/regionSslCertificates) The sslCertificates are used by: - external HTTPS load balancers - SSL proxy load balancers The regionSslCertificates are used by internal HTTPS load balancers. Optionally, certificate file contents that you upload can contain a set of up to five PEM-encoded certificates. The API call creates an object (sslCertificate) that holds this data. You can use SSL keys and certificates to secure connections to a load balancer. For more information, read Creating and using SSL certificates, SSL certificates quotas and limits, and Troubleshooting SSL certificates.
 */
export declare class SslCertificate extends SpeakeasyBase {
    /**
     * A value read into memory from a certificate file. The certificate file must be in PEM format. The certificate chain must be no greater than 5 certs long. The chain must include at least one intermediate cert.
     */
    certificate?: string;
    /**
     * [Output Only] Creation timestamp in RFC3339 text format.
     */
    creationTimestamp?: string;
    /**
     * An optional description of this resource. Provide this property when you create the resource.
     */
    description?: string;
    /**
     * [Output Only] Expire time of the certificate. RFC3339
     */
    expireTime?: string;
    /**
     * [Output Only] The unique identifier for the resource. This identifier is defined by the server.
     */
    id?: string;
    /**
     * [Output Only] Type of the resource. Always compute#sslCertificate for SSL certificates.
     */
    kind?: string;
    /**
     * Configuration and status of a managed SSL certificate.
     */
    managed?: SslCertificateManagedSslCertificate;
    /**
     * Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
     */
    name?: string;
    /**
     * A value read into memory from a write-only private key file. The private key file must be in PEM format. For security, only insert requests include this field.
     */
    privateKey?: string;
    /**
     * [Output Only] URL of the region where the regional SSL Certificate resides. This field is not applicable to global SSL Certificate.
     */
    region?: string;
    /**
     * [Output only] Server-defined URL for the resource.
     */
    selfLink?: string;
    /**
     * Configuration and status of a self-managed SSL certificate.
     */
    selfManaged?: SslCertificateSelfManagedSslCertificate;
    /**
     * [Output Only] Domains associated with the certificate via Subject Alternative Name.
     */
    subjectAlternativeNames?: string[];
    /**
     * (Optional) Specifies the type of SSL certificate, either "SELF_MANAGED" or "MANAGED". If not specified, the certificate is self-managed and the fields certificate and private_key are used.
     */
    type?: SslCertificateTypeEnum;
}
