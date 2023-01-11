package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CategoryResourceRelationshipsParent {
    @JsonProperty("data")
    public CategoryResourceRelationshipsParentData data;
    public CategoryResourceRelationshipsParent withData(CategoryResourceRelationshipsParentData data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public CategoryResourceRelationshipsParentLinks links;
    public CategoryResourceRelationshipsParent withLinks(CategoryResourceRelationshipsParentLinks links) {
        this.links = links;
        return this;
    }
}