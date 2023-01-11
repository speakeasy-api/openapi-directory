package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListCategoriesResponse
 * Successful response to get all categories and their ancestry. The
 * returned list is not paginated.
 * 
**/
public class ListCategoriesResponse {
    @JsonProperty("data")
    public CategoryResource[] data;
    public ListCategoriesResponse withData(CategoryResource[] data) {
        this.data = data;
        return this;
    }
}