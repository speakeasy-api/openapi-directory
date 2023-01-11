package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BookingCalculateprice200ApplicationJsonDataItinerary
 * **summary results** for all itinerary items
**/
public class BookingCalculateprice200ApplicationJsonDataItinerary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bookerEmail")
    public String bookerEmail;
    public BookingCalculateprice200ApplicationJsonDataItinerary withBookerEmail(String bookerEmail) {
        this.bookerEmail = bookerEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bookingDate")
    public String bookingDate;
    public BookingCalculateprice200ApplicationJsonDataItinerary withBookingDate(String bookingDate) {
        this.bookingDate = bookingDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bookingStatus")
    public openapisdk.models.shared.BookingStatusItinerary bookingStatus;
    public BookingCalculateprice200ApplicationJsonDataItinerary withBookingStatus(openapisdk.models.shared.BookingStatusItinerary bookingStatus) {
        this.bookingStatus = bookingStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currencyCode")
    public String currencyCode;
    public BookingCalculateprice200ApplicationJsonDataItinerary withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("distributorRef")
    public String distributorRef;
    public BookingCalculateprice200ApplicationJsonDataItinerary withDistributorRef(String distributorRef) {
        this.distributorRef = distributorRef;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exchangeRate")
    public Long exchangeRate;
    public BookingCalculateprice200ApplicationJsonDataItinerary withExchangeRate(Long exchangeRate) {
        this.exchangeRate = exchangeRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hasVoucher")
    public Boolean hasVoucher;
    public BookingCalculateprice200ApplicationJsonDataItinerary withHasVoucher(Boolean hasVoucher) {
        this.hasVoucher = hasVoucher;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemSummaries")
    public BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries[] itemSummaries;
    public BookingCalculateprice200ApplicationJsonDataItinerary withItemSummaries(BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries[] itemSummaries) {
        this.itemSummaries = itemSummaries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itineraryId")
    public Long itineraryId;
    public BookingCalculateprice200ApplicationJsonDataItinerary withItineraryId(Long itineraryId) {
        this.itineraryId = itineraryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("omniPreRuleList")
    public Long omniPreRuleList;
    public BookingCalculateprice200ApplicationJsonDataItinerary withOmniPreRuleList(Long omniPreRuleList) {
        this.omniPreRuleList = omniPreRuleList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paypalRedirectURL")
    public String paypalRedirectURL;
    public BookingCalculateprice200ApplicationJsonDataItinerary withPaypalRedirectUrl(String paypalRedirectURL) {
        this.paypalRedirectURL = paypalRedirectURL;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rulesApplied")
    public String[] rulesApplied;
    public BookingCalculateprice200ApplicationJsonDataItinerary withRulesApplied(String[] rulesApplied) {
        this.rulesApplied = rulesApplied;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("securityToken")
    public String securityToken;
    public BookingCalculateprice200ApplicationJsonDataItinerary withSecurityToken(String securityToken) {
        this.securityToken = securityToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sortOrder")
    public Long sortOrder;
    public BookingCalculateprice200ApplicationJsonDataItinerary withSortOrder(Long sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalPrice")
    public Double totalPrice;
    public BookingCalculateprice200ApplicationJsonDataItinerary withTotalPrice(Double totalPrice) {
        this.totalPrice = totalPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalPriceFormatted")
    public String totalPriceFormatted;
    public BookingCalculateprice200ApplicationJsonDataItinerary withTotalPriceFormatted(String totalPriceFormatted) {
        this.totalPriceFormatted = totalPriceFormatted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalPriceUSD")
    public Double totalPriceUSD;
    public BookingCalculateprice200ApplicationJsonDataItinerary withTotalPriceUsd(Double totalPriceUSD) {
        this.totalPriceUSD = totalPriceUSD;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userId")
    public Long userId;
    public BookingCalculateprice200ApplicationJsonDataItinerary withUserId(Long userId) {
        this.userId = userId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voucherKey")
    public String voucherKey;
    public BookingCalculateprice200ApplicationJsonDataItinerary withVoucherKey(String voucherKey) {
        this.voucherKey = voucherKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voucherURL")
    public String voucherURL;
    public BookingCalculateprice200ApplicationJsonDataItinerary withVoucherUrl(String voucherURL) {
        this.voucherURL = voucherURL;
        return this;
    }
}