package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HttpRoute
 * HttpRoute is the resource defining how HTTP traffic should be routed by a Mesh or Gateway resource.
**/
public class HttpRoute {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public HttpRoute withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public HttpRoute withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gateways")
    public String[] gateways;
    public HttpRoute withGateways(String[] gateways) {
        this.gateways = gateways;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hostnames")
    public String[] hostnames;
    public HttpRoute withHostnames(String[] hostnames) {
        this.hostnames = hostnames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public HttpRoute withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meshes")
    public String[] meshes;
    public HttpRoute withMeshes(String[] meshes) {
        this.meshes = meshes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public HttpRoute withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rules")
    public HttpRouteRouteRule[] rules;
    public HttpRoute withRules(HttpRouteRouteRule[] rules) {
        this.rules = rules;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selfLink")
    public String selfLink;
    public HttpRoute withSelfLink(String selfLink) {
        this.selfLink = selfLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public HttpRoute withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}