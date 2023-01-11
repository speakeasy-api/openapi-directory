package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BookingBookRequestBodyPartnerDetail
 * Applicable only for extra partner detail for either partner or merchant partner for sending partner specific information
 * 
**/
public class BookingBookRequestBodyPartnerDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("distributorRef")
    public String distributorRef;
    public BookingBookRequestBodyPartnerDetail withDistributorRef(String distributorRef) {
        this.distributorRef = distributorRef;
        return this;
    }
}