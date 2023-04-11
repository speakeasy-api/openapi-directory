import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudNetworksecurityV1CertificateProvider } from "./googlecloudnetworksecurityv1certificateprovider";
import { MTLSPolicy } from "./mtlspolicy";
/**
 * ServerTlsPolicy is a resource that specifies how a server should authenticate incoming requests. This resource itself does not affect configuration unless it is attached to a target HTTPS proxy or endpoint config selector resource.
 */
export declare class ServerTlsPolicyInput extends SpeakeasyBase {
    /**
     *  Determines if server allows plaintext connections. If set to true, server allows plain text connections. By default, it is set to false. This setting is not exclusive of other encryption modes. For example, if `allow_open` and `mtls_policy` are set, server allows both plain text and mTLS connections. See documentation of other encryption modes to confirm compatibility. Consider using it if you wish to upgrade in place your deployment to TLS while having mixed TLS and non-TLS traffic reaching port :80.
     */
    allowOpen?: boolean;
    /**
     * Free-text description of the resource.
     */
    description?: string;
    /**
     * Set of label tags associated with the resource.
     */
    labels?: Record<string, string>;
    /**
     * Specification of the MTLSPolicy.
     */
    mtlsPolicy?: MTLSPolicy;
    /**
     * Required. Name of the ServerTlsPolicy resource. It matches the pattern `projects/* /locations/{location}/serverTlsPolicies/{server_tls_policy}`
     */
    name?: string;
    /**
     * Specification of certificate provider. Defines the mechanism to obtain the certificate and private key for peer to peer authentication.
     */
    serverCertificate?: GoogleCloudNetworksecurityV1CertificateProvider;
}
/**
 * ServerTlsPolicy is a resource that specifies how a server should authenticate incoming requests. This resource itself does not affect configuration unless it is attached to a target HTTPS proxy or endpoint config selector resource.
 */
export declare class ServerTlsPolicy extends SpeakeasyBase {
    /**
     *  Determines if server allows plaintext connections. If set to true, server allows plain text connections. By default, it is set to false. This setting is not exclusive of other encryption modes. For example, if `allow_open` and `mtls_policy` are set, server allows both plain text and mTLS connections. See documentation of other encryption modes to confirm compatibility. Consider using it if you wish to upgrade in place your deployment to TLS while having mixed TLS and non-TLS traffic reaching port :80.
     */
    allowOpen?: boolean;
    /**
     * Output only. The timestamp when the resource was created.
     */
    createTime?: string;
    /**
     * Free-text description of the resource.
     */
    description?: string;
    /**
     * Set of label tags associated with the resource.
     */
    labels?: Record<string, string>;
    /**
     * Specification of the MTLSPolicy.
     */
    mtlsPolicy?: MTLSPolicy;
    /**
     * Required. Name of the ServerTlsPolicy resource. It matches the pattern `projects/* /locations/{location}/serverTlsPolicies/{server_tls_policy}`
     */
    name?: string;
    /**
     * Specification of certificate provider. Defines the mechanism to obtain the certificate and private key for peer to peer authentication.
     */
    serverCertificate?: GoogleCloudNetworksecurityV1CertificateProvider;
    /**
     * Output only. The timestamp when the resource was updated.
     */
    updateTime?: string;
}
