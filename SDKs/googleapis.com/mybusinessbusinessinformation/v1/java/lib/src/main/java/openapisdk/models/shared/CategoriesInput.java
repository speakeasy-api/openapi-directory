package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CategoriesInput
 * A collection of categories that describes the business. During updates, both fields must be set. Clients are prohibited from individually updating the primary or additional categories using the update mask.
**/
public class CategoriesInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalCategories")
    public CategoryInput[] additionalCategories;
    public CategoriesInput withAdditionalCategories(CategoryInput[] additionalCategories) {
        this.additionalCategories = additionalCategories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryCategory")
    public CategoryInput primaryCategory;
    public CategoriesInput withPrimaryCategory(CategoryInput primaryCategory) {
        this.primaryCategory = primaryCategory;
        return this;
    }
}