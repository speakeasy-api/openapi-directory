package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BookingStatusRequestBody
 * **note**: all items are optional, but at least one needs to be included
**/
public class BookingStatusRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bookingDateFrom")
    public String bookingDateFrom;
    public BookingStatusRequestBody withBookingDateFrom(String bookingDateFrom) {
        this.bookingDateFrom = bookingDateFrom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bookingDateTo")
    public String bookingDateTo;
    public BookingStatusRequestBody withBookingDateTo(String bookingDateTo) {
        this.bookingDateTo = bookingDateTo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("distributorItemRefs")
    public String[] distributorItemRefs;
    public BookingStatusRequestBody withDistributorItemRefs(String[] distributorItemRefs) {
        this.distributorItemRefs = distributorItemRefs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("distributorRefs")
    public String[] distributorRefs;
    public BookingStatusRequestBody withDistributorRefs(String[] distributorRefs) {
        this.distributorRefs = distributorRefs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemIds")
    public Long[] itemIds;
    public BookingStatusRequestBody withItemIds(Long[] itemIds) {
        this.itemIds = itemIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("leadFirstName")
    public String leadFirstName;
    public BookingStatusRequestBody withLeadFirstName(String leadFirstName) {
        this.leadFirstName = leadFirstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("leadSurname")
    public String leadSurname;
    public BookingStatusRequestBody withLeadSurname(String leadSurname) {
        this.leadSurname = leadSurname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("test")
    public Boolean test;
    public BookingStatusRequestBody withTest(Boolean test) {
        this.test = test;
        return this;
    }
}