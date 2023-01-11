package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BookingPastbooking200ApplicationJsonData
 * **object** containing pricing matrix information
**/
public class BookingPastbooking200ApplicationJsonData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bookerEmail")
    public String bookerEmail;
    public BookingPastbooking200ApplicationJsonData withBookerEmail(String bookerEmail) {
        this.bookerEmail = bookerEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bookingDate")
    public String bookingDate;
    public BookingPastbooking200ApplicationJsonData withBookingDate(String bookingDate) {
        this.bookingDate = bookingDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bookingStatus")
    public openapisdk.models.shared.BookingStatusItinerary bookingStatus;
    public BookingPastbooking200ApplicationJsonData withBookingStatus(openapisdk.models.shared.BookingStatusItinerary bookingStatus) {
        this.bookingStatus = bookingStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currencyCode")
    public String currencyCode;
    public BookingPastbooking200ApplicationJsonData withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("distributorRef")
    public String distributorRef;
    public BookingPastbooking200ApplicationJsonData withDistributorRef(String distributorRef) {
        this.distributorRef = distributorRef;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exchangeRate")
    public Long exchangeRate;
    public BookingPastbooking200ApplicationJsonData withExchangeRate(Long exchangeRate) {
        this.exchangeRate = exchangeRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hasVoucher")
    public Boolean hasVoucher;
    public BookingPastbooking200ApplicationJsonData withHasVoucher(Boolean hasVoucher) {
        this.hasVoucher = hasVoucher;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemSummaries")
    public BookingPastbooking200ApplicationJsonDataItemSummaries[] itemSummaries;
    public BookingPastbooking200ApplicationJsonData withItemSummaries(BookingPastbooking200ApplicationJsonDataItemSummaries[] itemSummaries) {
        this.itemSummaries = itemSummaries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itineraryId")
    public Long itineraryId;
    public BookingPastbooking200ApplicationJsonData withItineraryId(Long itineraryId) {
        this.itineraryId = itineraryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rulesApplied")
    public String rulesApplied;
    public BookingPastbooking200ApplicationJsonData withRulesApplied(String rulesApplied) {
        this.rulesApplied = rulesApplied;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sortOrder")
    public Long sortOrder;
    public BookingPastbooking200ApplicationJsonData withSortOrder(Long sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalPrice")
    public Double totalPrice;
    public BookingPastbooking200ApplicationJsonData withTotalPrice(Double totalPrice) {
        this.totalPrice = totalPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalPriceFormatted")
    public String totalPriceFormatted;
    public BookingPastbooking200ApplicationJsonData withTotalPriceFormatted(String totalPriceFormatted) {
        this.totalPriceFormatted = totalPriceFormatted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalPriceUSD")
    public Double totalPriceUSD;
    public BookingPastbooking200ApplicationJsonData withTotalPriceUsd(Double totalPriceUSD) {
        this.totalPriceUSD = totalPriceUSD;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userId")
    public String userId;
    public BookingPastbooking200ApplicationJsonData withUserId(String userId) {
        this.userId = userId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voucherKey")
    public String voucherKey;
    public BookingPastbooking200ApplicationJsonData withVoucherKey(String voucherKey) {
        this.voucherKey = voucherKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voucherURL")
    public String voucherURL;
    public BookingPastbooking200ApplicationJsonData withVoucherUrl(String voucherURL) {
        this.voucherURL = voucherURL;
        return this;
    }
}