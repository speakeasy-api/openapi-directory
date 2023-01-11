package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AppTargeting
 * A subset of app inventory to target. Bid requests that match criteria in at least one of the specified dimensions will be sent.
**/
public class AppTargeting {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mobileAppCategoryTargeting")
    public NumericTargetingDimension mobileAppCategoryTargeting;
    public AppTargeting withMobileAppCategoryTargeting(NumericTargetingDimension mobileAppCategoryTargeting) {
        this.mobileAppCategoryTargeting = mobileAppCategoryTargeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mobileAppTargeting")
    public StringTargetingDimension mobileAppTargeting;
    public AppTargeting withMobileAppTargeting(StringTargetingDimension mobileAppTargeting) {
        this.mobileAppTargeting = mobileAppTargeting;
        return this;
    }
}