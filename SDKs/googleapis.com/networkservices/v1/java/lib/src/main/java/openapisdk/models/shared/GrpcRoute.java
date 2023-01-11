package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GrpcRoute
 * GrpcRoute is the resource defining how gRPC traffic routed by a Mesh or Gateway resource is routed.
**/
public class GrpcRoute {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public GrpcRoute withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GrpcRoute withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gateways")
    public String[] gateways;
    public GrpcRoute withGateways(String[] gateways) {
        this.gateways = gateways;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hostnames")
    public String[] hostnames;
    public GrpcRoute withHostnames(String[] hostnames) {
        this.hostnames = hostnames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public GrpcRoute withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meshes")
    public String[] meshes;
    public GrpcRoute withMeshes(String[] meshes) {
        this.meshes = meshes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GrpcRoute withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rules")
    public GrpcRouteRouteRule[] rules;
    public GrpcRoute withRules(GrpcRouteRouteRule[] rules) {
        this.rules = rules;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selfLink")
    public String selfLink;
    public GrpcRoute withSelfLink(String selfLink) {
        this.selfLink = selfLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public GrpcRoute withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}