package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreativeRestrictions
 * Represents creative restrictions associated to Programmatic Guaranteed/ Preferred Deal in Ad Manager. This doesn't apply to Private Auction and AdX Preferred Deals.
**/
public class CreativeRestrictions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creativeFormat")
    public CreativeRestrictionsCreativeFormatEnum creativeFormat;
    public CreativeRestrictions withCreativeFormat(CreativeRestrictionsCreativeFormatEnum creativeFormat) {
        this.creativeFormat = creativeFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creativeSpecifications")
    public CreativeSpecification[] creativeSpecifications;
    public CreativeRestrictions withCreativeSpecifications(CreativeSpecification[] creativeSpecifications) {
        this.creativeSpecifications = creativeSpecifications;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skippableAdType")
    public CreativeRestrictionsSkippableAdTypeEnum skippableAdType;
    public CreativeRestrictions withSkippableAdType(CreativeRestrictionsSkippableAdTypeEnum skippableAdType) {
        this.skippableAdType = skippableAdType;
        return this;
    }
}