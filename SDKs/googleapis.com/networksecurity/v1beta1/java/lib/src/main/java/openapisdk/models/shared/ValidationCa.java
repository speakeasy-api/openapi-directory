package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ValidationCa
 * Specification of ValidationCA. Defines the mechanism to obtain the Certificate Authority certificate to validate the peer certificate.
**/
public class ValidationCa {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificateProviderInstance")
    public CertificateProviderInstance certificateProviderInstance;
    public ValidationCa withCertificateProviderInstance(CertificateProviderInstance certificateProviderInstance) {
        this.certificateProviderInstance = certificateProviderInstance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("grpcEndpoint")
    public GoogleCloudNetworksecurityV1beta1GrpcEndpoint grpcEndpoint;
    public ValidationCa withGrpcEndpoint(GoogleCloudNetworksecurityV1beta1GrpcEndpoint grpcEndpoint) {
        this.grpcEndpoint = grpcEndpoint;
        return this;
    }
}