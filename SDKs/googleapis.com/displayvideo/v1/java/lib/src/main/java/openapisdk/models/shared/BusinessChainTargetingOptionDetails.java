package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BusinessChainTargetingOptionDetails
 * Represents a targetable business chain within a geo region. This will be populated in the business_chain_details field when targeting_type is `TARGETING_TYPE_BUSINESS_CHAIN`.
**/
public class BusinessChainTargetingOptionDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("businessChain")
    public String businessChain;
    public BusinessChainTargetingOptionDetails withBusinessChain(String businessChain) {
        this.businessChain = businessChain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("geoRegion")
    public String geoRegion;
    public BusinessChainTargetingOptionDetails withGeoRegion(String geoRegion) {
        this.geoRegion = geoRegion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("geoRegionType")
    public BusinessChainTargetingOptionDetailsGeoRegionTypeEnum geoRegionType;
    public BusinessChainTargetingOptionDetails withGeoRegionType(BusinessChainTargetingOptionDetailsGeoRegionTypeEnum geoRegionType) {
        this.geoRegionType = geoRegionType;
        return this;
    }
}