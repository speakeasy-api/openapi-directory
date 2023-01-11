package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GrpcRouteMethodMatch
 * Specifies a match against a method.
**/
public class GrpcRouteMethodMatch {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("caseSensitive")
    public Boolean caseSensitive;
    public GrpcRouteMethodMatch withCaseSensitive(Boolean caseSensitive) {
        this.caseSensitive = caseSensitive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("grpcMethod")
    public String grpcMethod;
    public GrpcRouteMethodMatch withGrpcMethod(String grpcMethod) {
        this.grpcMethod = grpcMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("grpcService")
    public String grpcService;
    public GrpcRouteMethodMatch withGrpcService(String grpcService) {
        this.grpcService = grpcService;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public GrpcRouteMethodMatchTypeEnum type;
    public GrpcRouteMethodMatch withType(GrpcRouteMethodMatchTypeEnum type) {
        this.type = type;
        return this;
    }
}