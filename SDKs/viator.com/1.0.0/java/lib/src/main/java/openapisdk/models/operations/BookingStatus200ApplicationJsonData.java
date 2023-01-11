package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BookingStatus200ApplicationJsonData
 * **object** containing booking status and details
**/
public class BookingStatus200ApplicationJsonData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bookingDate")
    public String bookingDate;
    public BookingStatus200ApplicationJsonData withBookingDate(String bookingDate) {
        this.bookingDate = bookingDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bookingStatus")
    public openapisdk.models.shared.BookingStatusItinerary bookingStatus;
    public BookingStatus200ApplicationJsonData withBookingStatus(openapisdk.models.shared.BookingStatusItinerary bookingStatus) {
        this.bookingStatus = bookingStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("distributorRef")
    public String distributorRef;
    public BookingStatus200ApplicationJsonData withDistributorRef(String distributorRef) {
        this.distributorRef = distributorRef;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemSummaries")
    public BookingStatus200ApplicationJsonDataItemSummaries[] itemSummaries;
    public BookingStatus200ApplicationJsonData withItemSummaries(BookingStatus200ApplicationJsonDataItemSummaries[] itemSummaries) {
        this.itemSummaries = itemSummaries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itineraryId")
    public Long itineraryId;
    public BookingStatus200ApplicationJsonData withItineraryId(Long itineraryId) {
        this.itineraryId = itineraryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sortOrder")
    public Long sortOrder;
    public BookingStatus200ApplicationJsonData withSortOrder(Long sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
}