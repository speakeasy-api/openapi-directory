package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BookingStatusItems200ApplicationJsonData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bookingStatus")
    public openapisdk.models.shared.BookingStatusItem bookingStatus;
    public BookingStatusItems200ApplicationJsonData withBookingStatus(openapisdk.models.shared.BookingStatusItem bookingStatus) {
        this.bookingStatus = bookingStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("distributorItemRef")
    public String distributorItemRef;
    public BookingStatusItems200ApplicationJsonData withDistributorItemRef(String distributorItemRef) {
        this.distributorItemRef = distributorItemRef;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemId")
    public Long itemId;
    public BookingStatusItems200ApplicationJsonData withItemId(Long itemId) {
        this.itemId = itemId;
        return this;
    }
}