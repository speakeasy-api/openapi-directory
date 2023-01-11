package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BookingBookRequestBodyItemsPartnerItemDetail
 * **object** containing partner details at a per-item level
**/
public class BookingBookRequestBodyItemsPartnerItemDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("distributorItemRef")
    public String distributorItemRef;
    public BookingBookRequestBodyItemsPartnerItemDetail withDistributorItemRef(String distributorItemRef) {
        this.distributorItemRef = distributorItemRef;
        return this;
    }
}