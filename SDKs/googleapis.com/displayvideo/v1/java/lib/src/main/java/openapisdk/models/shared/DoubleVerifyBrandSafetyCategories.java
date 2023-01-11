package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DoubleVerifyBrandSafetyCategories
 * Settings for brand safety controls.
**/
public class DoubleVerifyBrandSafetyCategories {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("avoidUnknownBrandSafetyCategory")
    public Boolean avoidUnknownBrandSafetyCategory;
    public DoubleVerifyBrandSafetyCategories withAvoidUnknownBrandSafetyCategory(Boolean avoidUnknownBrandSafetyCategory) {
        this.avoidUnknownBrandSafetyCategory = avoidUnknownBrandSafetyCategory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("avoidedHighSeverityCategories")
    public DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum[] avoidedHighSeverityCategories;
    public DoubleVerifyBrandSafetyCategories withAvoidedHighSeverityCategories(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum[] avoidedHighSeverityCategories) {
        this.avoidedHighSeverityCategories = avoidedHighSeverityCategories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("avoidedMediumSeverityCategories")
    public DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum[] avoidedMediumSeverityCategories;
    public DoubleVerifyBrandSafetyCategories withAvoidedMediumSeverityCategories(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum[] avoidedMediumSeverityCategories) {
        this.avoidedMediumSeverityCategories = avoidedMediumSeverityCategories;
        return this;
    }
}