package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BaseRelationshipResource
 * Minimum requirements to represent a relationship resource
**/
public class BaseRelationshipResource {
    @JsonProperty("id")
    public String id;
    public BaseRelationshipResource withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public BaseRelationshipResourceBaseRelationshipMeta meta;
    public BaseRelationshipResource withMeta(BaseRelationshipResourceBaseRelationshipMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public BaseRelationshipResource withType(String type) {
        this.type = type;
        return this;
    }
}