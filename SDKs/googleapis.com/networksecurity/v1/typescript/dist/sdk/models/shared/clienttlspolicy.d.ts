import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudNetworksecurityV1CertificateProvider } from "./googlecloudnetworksecurityv1certificateprovider";
import { ValidationCA } from "./validationca";
/**
 * ClientTlsPolicy is a resource that specifies how a client should authenticate connections to backends of a service. This resource itself does not affect configuration unless it is attached to a backend service resource.
 */
export declare class ClientTlsPolicy extends SpeakeasyBase {
    /**
     * Specification of certificate provider. Defines the mechanism to obtain the certificate and private key for peer to peer authentication.
     */
    clientCertificate?: GoogleCloudNetworksecurityV1CertificateProvider;
    /**
     * Output only. The timestamp when the resource was created.
     */
    createTime?: string;
    /**
     * Optional. Free-text description of the resource.
     */
    description?: string;
    /**
     * Optional. Set of label tags associated with the resource.
     */
    labels?: Record<string, string>;
    /**
     * Required. Name of the ClientTlsPolicy resource. It matches the pattern `projects/* /locations/{location}/clientTlsPolicies/{client_tls_policy}`
     */
    name?: string;
    /**
     * Optional. Defines the mechanism to obtain the Certificate Authority certificate to validate the server certificate. If empty, client does not validate the server certificate.
     */
    serverValidationCa?: ValidationCA[];
    /**
     * Optional. Server Name Indication string to present to the server during TLS handshake. E.g: "secure.example.com".
     */
    sni?: string;
    /**
     * Output only. The timestamp when the resource was updated.
     */
    updateTime?: string;
}
/**
 * ClientTlsPolicy is a resource that specifies how a client should authenticate connections to backends of a service. This resource itself does not affect configuration unless it is attached to a backend service resource.
 */
export declare class ClientTlsPolicyInput extends SpeakeasyBase {
    /**
     * Specification of certificate provider. Defines the mechanism to obtain the certificate and private key for peer to peer authentication.
     */
    clientCertificate?: GoogleCloudNetworksecurityV1CertificateProvider;
    /**
     * Optional. Free-text description of the resource.
     */
    description?: string;
    /**
     * Optional. Set of label tags associated with the resource.
     */
    labels?: Record<string, string>;
    /**
     * Required. Name of the ClientTlsPolicy resource. It matches the pattern `projects/* /locations/{location}/clientTlsPolicies/{client_tls_policy}`
     */
    name?: string;
    /**
     * Optional. Defines the mechanism to obtain the Certificate Authority certificate to validate the server certificate. If empty, client does not validate the server certificate.
     */
    serverValidationCa?: ValidationCA[];
    /**
     * Optional. Server Name Indication string to present to the server during TLS handshake. E.g: "secure.example.com".
     */
    sni?: string;
}
