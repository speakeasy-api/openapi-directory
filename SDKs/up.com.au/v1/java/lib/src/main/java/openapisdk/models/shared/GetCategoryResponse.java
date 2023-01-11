package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetCategoryResponse
 * Successful response to get a single category and its ancestry.
 * 
**/
public class GetCategoryResponse {
    @JsonProperty("data")
    public CategoryResource data;
    public GetCategoryResponse withData(CategoryResource data) {
        this.data = data;
        return this;
    }
}