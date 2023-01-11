package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InfoResponseBaseInfoResource
 * Resource objects appear in a JSON API document to represent resources.
**/
public class InfoResponseBaseInfoResource {
    @JsonProperty("attributes")
    public BaseInfoAttributes attributes;
    public InfoResponseBaseInfoResource withAttributes(BaseInfoAttributes attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public InfoResponseBaseInfoResource withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public InfoResponseBaseInfoResourceResourceLinks links;
    public InfoResponseBaseInfoResource withLinks(InfoResponseBaseInfoResourceResourceLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public java.util.Map<String, Object> meta;
    public InfoResponseBaseInfoResource withMeta(java.util.Map<String, Object> meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relationships")
    public java.util.Map<String, Object> relationships;
    public InfoResponseBaseInfoResource withRelationships(java.util.Map<String, Object> relationships) {
        this.relationships = relationships;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public InfoResponseBaseInfoResource withType(String type) {
        this.type = type;
        return this;
    }
}