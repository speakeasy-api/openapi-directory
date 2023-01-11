package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CategoryResourceRelationshipsChildren {
    @JsonProperty("data")
    public CategoryResourceRelationshipsChildrenData[] data;
    public CategoryResourceRelationshipsChildren withData(CategoryResourceRelationshipsChildrenData[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public CategoryResourceRelationshipsChildrenLinks links;
    public CategoryResourceRelationshipsChildren withLinks(CategoryResourceRelationshipsChildrenLinks links) {
        this.links = links;
        return this;
    }
}