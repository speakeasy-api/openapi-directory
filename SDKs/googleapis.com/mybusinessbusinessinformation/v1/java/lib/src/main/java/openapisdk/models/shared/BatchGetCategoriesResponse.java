package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchGetCategoriesResponse
 * Response message for BusinessCategories.BatchGetBusinessCategories.
**/
public class BatchGetCategoriesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categories")
    public Category[] categories;
    public BatchGetCategoriesResponse withCategories(Category[] categories) {
        this.categories = categories;
        return this;
    }
}