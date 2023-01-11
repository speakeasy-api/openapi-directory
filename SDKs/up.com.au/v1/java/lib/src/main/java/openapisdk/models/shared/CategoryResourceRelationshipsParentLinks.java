package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CategoryResourceRelationshipsParentLinks {
    @JsonProperty("related")
    public String related;
    public CategoryResourceRelationshipsParentLinks withRelated(String related) {
        this.related = related;
        return this;
    }
}