package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SensitiveCategoryAssignedTargetingOptionDetails
 * Targeting details for sensitive category. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION`.
**/
public class SensitiveCategoryAssignedTargetingOptionDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("excludedTargetingOptionId")
    public String excludedTargetingOptionId;
    public SensitiveCategoryAssignedTargetingOptionDetails withExcludedTargetingOptionId(String excludedTargetingOptionId) {
        this.excludedTargetingOptionId = excludedTargetingOptionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sensitiveCategory")
    public SensitiveCategoryAssignedTargetingOptionDetailsSensitiveCategoryEnum sensitiveCategory;
    public SensitiveCategoryAssignedTargetingOptionDetails withSensitiveCategory(SensitiveCategoryAssignedTargetingOptionDetailsSensitiveCategoryEnum sensitiveCategory) {
        this.sensitiveCategory = sensitiveCategory;
        return this;
    }
}