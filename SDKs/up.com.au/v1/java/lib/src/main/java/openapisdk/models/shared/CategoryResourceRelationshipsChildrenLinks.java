package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CategoryResourceRelationshipsChildrenLinks {
    @JsonProperty("related")
    public String related;
    public CategoryResourceRelationshipsChildrenLinks withRelated(String related) {
        this.related = related;
        return this;
    }
}