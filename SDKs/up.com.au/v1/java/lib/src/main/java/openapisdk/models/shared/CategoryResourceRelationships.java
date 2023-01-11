package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CategoryResourceRelationships {
    @JsonProperty("children")
    public CategoryResourceRelationshipsChildren children;
    public CategoryResourceRelationships withChildren(CategoryResourceRelationshipsChildren children) {
        this.children = children;
        return this;
    }
    @JsonProperty("parent")
    public CategoryResourceRelationshipsParent parent;
    public CategoryResourceRelationships withParent(CategoryResourceRelationshipsParent parent) {
        this.parent = parent;
        return this;
    }
}