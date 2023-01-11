package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BookingStatusItemsRequestBody
 * **note**: all items are optional, but at least one needs to be included
**/
public class BookingStatusItemsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bookingDateFrom")
    public String bookingDateFrom;
    public BookingStatusItemsRequestBody withBookingDateFrom(String bookingDateFrom) {
        this.bookingDateFrom = bookingDateFrom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bookingDateTo")
    public String bookingDateTo;
    public BookingStatusItemsRequestBody withBookingDateTo(String bookingDateTo) {
        this.bookingDateTo = bookingDateTo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("distributorItemRefs")
    public String[] distributorItemRefs;
    public BookingStatusItemsRequestBody withDistributorItemRefs(String[] distributorItemRefs) {
        this.distributorItemRefs = distributorItemRefs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("distributorRefs")
    public String[] distributorRefs;
    public BookingStatusItemsRequestBody withDistributorRefs(String[] distributorRefs) {
        this.distributorRefs = distributorRefs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemIds")
    public Long[] itemIds;
    public BookingStatusItemsRequestBody withItemIds(Long[] itemIds) {
        this.itemIds = itemIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("leadFirstName")
    public String leadFirstName;
    public BookingStatusItemsRequestBody withLeadFirstName(String leadFirstName) {
        this.leadFirstName = leadFirstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("leadSurname")
    public String leadSurname;
    public BookingStatusItemsRequestBody withLeadSurname(String leadSurname) {
        this.leadSurname = leadSurname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("test")
    public Boolean test;
    public BookingStatusItemsRequestBody withTest(Boolean test) {
        this.test = test;
        return this;
    }
}