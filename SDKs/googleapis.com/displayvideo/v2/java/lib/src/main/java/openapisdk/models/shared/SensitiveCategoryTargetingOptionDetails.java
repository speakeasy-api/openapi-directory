package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SensitiveCategoryTargetingOptionDetails
 * Represents a targetable sensitive category. This will be populated in the sensitive_category_details field of the TargetingOption when targeting_type is `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION`.
**/
public class SensitiveCategoryTargetingOptionDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sensitiveCategory")
    public SensitiveCategoryTargetingOptionDetailsSensitiveCategoryEnum sensitiveCategory;
    public SensitiveCategoryTargetingOptionDetails withSensitiveCategory(SensitiveCategoryTargetingOptionDetailsSensitiveCategoryEnum sensitiveCategory) {
        this.sensitiveCategory = sensitiveCategory;
        return this;
    }
}