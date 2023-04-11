import { SpeakeasyBase } from "../../../internal/utils";
import { CertificateProviderInstance } from "./certificateproviderinstance";
import { GoogleCloudNetworksecurityV1beta1GrpcEndpoint } from "./googlecloudnetworksecurityv1beta1grpcendpoint";
/**
 * Specification of certificate provider. Defines the mechanism to obtain the certificate and private key for peer to peer authentication.
 */
export declare class GoogleCloudNetworksecurityV1beta1CertificateProvider extends SpeakeasyBase {
    /**
     * Specification of a TLS certificate provider instance. Workloads may have one or more CertificateProvider instances (plugins) and one of them is enabled and configured by specifying this message. Workloads use the values from this message to locate and load the CertificateProvider instance configuration.
     */
    certificateProviderInstance?: CertificateProviderInstance;
    /**
     * Specification of the GRPC Endpoint.
     */
    grpcEndpoint?: GoogleCloudNetworksecurityV1beta1GrpcEndpoint;
}
