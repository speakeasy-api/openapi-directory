import { SpeakeasyBase } from "../../../internal/utils";
import { ClientCertificateConfig } from "./clientcertificateconfig";
/**
 * The authentication information for accessing the master endpoint. Authentication can be done using HTTP basic auth or using client certificates.
 */
export declare class MasterAuth extends SpeakeasyBase {
    /**
     * [Output only] Base64-encoded public certificate used by clients to authenticate to the cluster endpoint.
     */
    clientCertificate?: string;
    /**
     * Configuration for client certificates on the cluster.
     */
    clientCertificateConfig?: ClientCertificateConfig;
    /**
     * [Output only] Base64-encoded private key used by clients to authenticate to the cluster endpoint.
     */
    clientKey?: string;
    /**
     * [Output only] Base64-encoded public certificate that is the root of trust for the cluster.
     */
    clusterCaCertificate?: string;
    /**
     * The password to use for HTTP basic authentication to the master endpoint. Because the master endpoint is open to the Internet, you should create a strong password. If a password is provided for cluster creation, username must be non-empty. Warning: basic authentication is deprecated, and will be removed in GKE control plane versions 1.19 and newer. For a list of recommended authentication methods, see: https://cloud.google.com/kubernetes-engine/docs/how-to/api-server-authentication
     */
    password?: string;
    /**
     * The username to use for HTTP basic authentication to the master endpoint. For clusters v1.6.0 and later, basic authentication can be disabled by leaving username unspecified (or setting it to the empty string). Warning: basic authentication is deprecated, and will be removed in GKE control plane versions 1.19 and newer. For a list of recommended authentication methods, see: https://cloud.google.com/kubernetes-engine/docs/how-to/api-server-authentication
     */
    username?: string;
}
