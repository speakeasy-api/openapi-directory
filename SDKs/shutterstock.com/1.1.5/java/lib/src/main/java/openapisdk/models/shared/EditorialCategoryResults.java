package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EditorialCategoryResults
 * List of editorial categories
**/
public class EditorialCategoryResults {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public EditorialCategory[] data;
    public EditorialCategoryResults withData(EditorialCategory[] data) {
        this.data = data;
        return this;
    }
}