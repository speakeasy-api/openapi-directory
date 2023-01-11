package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CategoryTargetingOptionDetails
 * Represents a targetable category. This will be populated in the category_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_CATEGORY`.
**/
public class CategoryTargetingOptionDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public CategoryTargetingOptionDetails withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
}