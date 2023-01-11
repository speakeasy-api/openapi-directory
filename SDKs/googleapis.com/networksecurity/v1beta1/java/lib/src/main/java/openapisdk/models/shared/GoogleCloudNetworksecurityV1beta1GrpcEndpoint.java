package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudNetworksecurityV1beta1GrpcEndpoint
 * Specification of the GRPC Endpoint.
**/
public class GoogleCloudNetworksecurityV1beta1GrpcEndpoint {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetUri")
    public String targetUri;
    public GoogleCloudNetworksecurityV1beta1GrpcEndpoint withTargetUri(String targetUri) {
        this.targetUri = targetUri;
        return this;
    }
}