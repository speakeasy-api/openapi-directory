package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * BaseRelationshipResourceBaseRelationshipMeta
 * Specific meta field for base relationship resource
**/
public class BaseRelationshipResourceBaseRelationshipMeta {
    @JsonProperty("description")
    public String description;
    public BaseRelationshipResourceBaseRelationshipMeta withDescription(String description) {
        this.description = description;
        return this;
    }
}