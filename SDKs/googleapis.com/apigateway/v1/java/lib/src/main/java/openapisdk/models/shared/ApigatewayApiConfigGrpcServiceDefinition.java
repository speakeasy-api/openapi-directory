package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApigatewayApiConfigGrpcServiceDefinition
 * A gRPC service definition.
**/
public class ApigatewayApiConfigGrpcServiceDefinition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileDescriptorSet")
    public ApigatewayApiConfigFile fileDescriptorSet;
    public ApigatewayApiConfigGrpcServiceDefinition withFileDescriptorSet(ApigatewayApiConfigFile fileDescriptorSet) {
        this.fileDescriptorSet = fileDescriptorSet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public ApigatewayApiConfigFile[] source;
    public ApigatewayApiConfigGrpcServiceDefinition withSource(ApigatewayApiConfigFile[] source) {
        this.source = source;
        return this;
    }
}