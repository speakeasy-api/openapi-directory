package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CarrierAndIspTargetingOptionDetails
 * Represents a targetable carrier or ISP. This will be populated in the carrier_and_isp_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_CARRIER_AND_ISP`.
**/
public class CarrierAndIspTargetingOptionDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public CarrierAndIspTargetingOptionDetails withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public CarrierAndIspTargetingOptionDetailsTypeEnum type;
    public CarrierAndIspTargetingOptionDetails withType(CarrierAndIspTargetingOptionDetailsTypeEnum type) {
        this.type = type;
        return this;
    }
}