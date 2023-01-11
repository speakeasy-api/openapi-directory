package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CategoryRequest {
    @JsonProperty("categories")
    public CategoryDto[] categories;
    public CategoryRequest withCategories(CategoryDto[] categories) {
        this.categories = categories;
        return this;
    }
}