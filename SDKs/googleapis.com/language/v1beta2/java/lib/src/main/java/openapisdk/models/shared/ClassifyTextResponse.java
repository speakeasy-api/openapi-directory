package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ClassifyTextResponse
 * The document classification response message.
**/
public class ClassifyTextResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categories")
    public ClassificationCategory[] categories;
    public ClassifyTextResponse withCategories(ClassificationCategory[] categories) {
        this.categories = categories;
        return this;
    }
}