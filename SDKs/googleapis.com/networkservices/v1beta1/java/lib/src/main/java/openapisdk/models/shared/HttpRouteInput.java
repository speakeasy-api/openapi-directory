package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HttpRouteInput
 * HttpRoute is the resource defining how HTTP traffic should be routed by a Mesh or Gateway resource.
**/
public class HttpRouteInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public HttpRouteInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gateways")
    public String[] gateways;
    public HttpRouteInput withGateways(String[] gateways) {
        this.gateways = gateways;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hostnames")
    public String[] hostnames;
    public HttpRouteInput withHostnames(String[] hostnames) {
        this.hostnames = hostnames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public HttpRouteInput withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meshes")
    public String[] meshes;
    public HttpRouteInput withMeshes(String[] meshes) {
        this.meshes = meshes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public HttpRouteInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rules")
    public HttpRouteRouteRule[] rules;
    public HttpRouteInput withRules(HttpRouteRouteRule[] rules) {
        this.rules = rules;
        return this;
    }
}