package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AdditionalInformationStructured
 * Is used if and only if the bookingStatus entry equals "information". 
 * Every active standing order related to the dedicated payment account result into one entry.
 * 
**/
public class AdditionalInformationStructured {
    @JsonProperty("standingOrderDetails")
    public StandingOrderDetails standingOrderDetails;
    public AdditionalInformationStructured withStandingOrderDetails(StandingOrderDetails standingOrderDetails) {
        this.standingOrderDetails = standingOrderDetails;
        return this;
    }
}