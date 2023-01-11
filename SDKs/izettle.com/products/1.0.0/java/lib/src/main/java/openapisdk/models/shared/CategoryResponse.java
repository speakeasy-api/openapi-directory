package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CategoryResponse {
    @JsonProperty("categories")
    public CategoryDto[] categories;
    public CategoryResponse withCategories(CategoryDto[] categories) {
        this.categories = categories;
        return this;
    }
}