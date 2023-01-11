package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BookingMybookings200ApplicationJsonData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bookerEmail")
    public String bookerEmail;
    public BookingMybookings200ApplicationJsonData withBookerEmail(String bookerEmail) {
        this.bookerEmail = bookerEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bookingDate")
    public String bookingDate;
    public BookingMybookings200ApplicationJsonData withBookingDate(String bookingDate) {
        this.bookingDate = bookingDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bookingStatus")
    public openapisdk.models.shared.BookingStatusItinerary bookingStatus;
    public BookingMybookings200ApplicationJsonData withBookingStatus(openapisdk.models.shared.BookingStatusItinerary bookingStatus) {
        this.bookingStatus = bookingStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currencyCode")
    public String currencyCode;
    public BookingMybookings200ApplicationJsonData withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("distributorRef")
    public String distributorRef;
    public BookingMybookings200ApplicationJsonData withDistributorRef(String distributorRef) {
        this.distributorRef = distributorRef;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exchangeRate")
    public Long exchangeRate;
    public BookingMybookings200ApplicationJsonData withExchangeRate(Long exchangeRate) {
        this.exchangeRate = exchangeRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hasVoucher")
    public Boolean hasVoucher;
    public BookingMybookings200ApplicationJsonData withHasVoucher(Boolean hasVoucher) {
        this.hasVoucher = hasVoucher;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemSummaries")
    public BookingMybookings200ApplicationJsonDataItemSummaries[] itemSummaries;
    public BookingMybookings200ApplicationJsonData withItemSummaries(BookingMybookings200ApplicationJsonDataItemSummaries[] itemSummaries) {
        this.itemSummaries = itemSummaries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itineraryId")
    public Long itineraryId;
    public BookingMybookings200ApplicationJsonData withItineraryId(Long itineraryId) {
        this.itineraryId = itineraryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rulesApplied")
    public String rulesApplied;
    public BookingMybookings200ApplicationJsonData withRulesApplied(String rulesApplied) {
        this.rulesApplied = rulesApplied;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sortOrder")
    public Long sortOrder;
    public BookingMybookings200ApplicationJsonData withSortOrder(Long sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalPrice")
    public Double totalPrice;
    public BookingMybookings200ApplicationJsonData withTotalPrice(Double totalPrice) {
        this.totalPrice = totalPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalPriceFormatted")
    public String totalPriceFormatted;
    public BookingMybookings200ApplicationJsonData withTotalPriceFormatted(String totalPriceFormatted) {
        this.totalPriceFormatted = totalPriceFormatted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalPriceUSD")
    public Double totalPriceUSD;
    public BookingMybookings200ApplicationJsonData withTotalPriceUsd(Double totalPriceUSD) {
        this.totalPriceUSD = totalPriceUSD;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userId")
    public String userId;
    public BookingMybookings200ApplicationJsonData withUserId(String userId) {
        this.userId = userId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voucherKey")
    public String voucherKey;
    public BookingMybookings200ApplicationJsonData withVoucherKey(String voucherKey) {
        this.voucherKey = voucherKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voucherURL")
    public String voucherURL;
    public BookingMybookings200ApplicationJsonData withVoucherUrl(String voucherURL) {
        this.voucherURL = voucherURL;
        return this;
    }
}