package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudNetworksecurityV1CertificateProvider
 * Specification of certificate provider. Defines the mechanism to obtain the certificate and private key for peer to peer authentication.
**/
public class GoogleCloudNetworksecurityV1CertificateProvider {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificateProviderInstance")
    public CertificateProviderInstance certificateProviderInstance;
    public GoogleCloudNetworksecurityV1CertificateProvider withCertificateProviderInstance(CertificateProviderInstance certificateProviderInstance) {
        this.certificateProviderInstance = certificateProviderInstance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("grpcEndpoint")
    public GoogleCloudNetworksecurityV1GrpcEndpoint grpcEndpoint;
    public GoogleCloudNetworksecurityV1CertificateProvider withGrpcEndpoint(GoogleCloudNetworksecurityV1GrpcEndpoint grpcEndpoint) {
        this.grpcEndpoint = grpcEndpoint;
        return this;
    }
}