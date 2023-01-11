package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Category
 * The category to which the update belongs.
**/
public class Category {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categoryId")
    public String categoryId;
    public Category withCategoryId(String categoryId) {
        this.categoryId = categoryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Category withName(String name) {
        this.name = name;
        return this;
    }
}