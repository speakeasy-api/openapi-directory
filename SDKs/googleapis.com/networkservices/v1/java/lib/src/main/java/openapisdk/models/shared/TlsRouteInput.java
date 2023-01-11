package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TlsRouteInput
 * TlsRoute defines how traffic should be routed based on SNI and other matching L3 attributes.
**/
public class TlsRouteInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public TlsRouteInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gateways")
    public String[] gateways;
    public TlsRouteInput withGateways(String[] gateways) {
        this.gateways = gateways;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meshes")
    public String[] meshes;
    public TlsRouteInput withMeshes(String[] meshes) {
        this.meshes = meshes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public TlsRouteInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rules")
    public TlsRouteRouteRule[] rules;
    public TlsRouteInput withRules(TlsRouteRouteRule[] rules) {
        this.rules = rules;
        return this;
    }
}