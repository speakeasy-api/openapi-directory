package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchGetBusinessCategoriesResponse
 * Response message for BusinessCategories.BatchGetBusinessCategories.
**/
public class BatchGetBusinessCategoriesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categories")
    public Category[] categories;
    public BatchGetBusinessCategoriesResponse withCategories(Category[] categories) {
        this.categories = categories;
        return this;
    }
}