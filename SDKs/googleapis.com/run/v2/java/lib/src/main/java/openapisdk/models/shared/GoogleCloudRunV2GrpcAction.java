package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRunV2GrpcAction
 * GRPCAction describes an action involving a GRPC port.
**/
public class GoogleCloudRunV2GrpcAction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("port")
    public Integer port;
    public GoogleCloudRunV2GrpcAction withPort(Integer port) {
        this.port = port;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service")
    public String service;
    public GoogleCloudRunV2GrpcAction withService(String service) {
        this.service = service;
        return this;
    }
}