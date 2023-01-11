package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Categories
 * A collection of categories that describes the business. During updates, both fields must be set. Clients are prohibited from individually updating the primary or additional categories using the update mask.
**/
public class Categories {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalCategories")
    public Category[] additionalCategories;
    public Categories withAdditionalCategories(Category[] additionalCategories) {
        this.additionalCategories = additionalCategories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryCategory")
    public Category primaryCategory;
    public Categories withPrimaryCategory(Category primaryCategory) {
        this.primaryCategory = primaryCategory;
        return this;
    }
}