package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EditorialImageCategoryResults
 * List of editorial categories
**/
public class EditorialImageCategoryResults {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public EditorialCategory[] data;
    public EditorialImageCategoryResults withData(EditorialCategory[] data) {
        this.data = data;
        return this;
    }
}