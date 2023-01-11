package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BookingBook200ApplicationJsonData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bookerEmail")
    public String bookerEmail;
    public BookingBook200ApplicationJsonData withBookerEmail(String bookerEmail) {
        this.bookerEmail = bookerEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bookingDate")
    public String bookingDate;
    public BookingBook200ApplicationJsonData withBookingDate(String bookingDate) {
        this.bookingDate = bookingDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bookingStatus")
    public openapisdk.models.shared.BookingStatusItinerary bookingStatus;
    public BookingBook200ApplicationJsonData withBookingStatus(openapisdk.models.shared.BookingStatusItinerary bookingStatus) {
        this.bookingStatus = bookingStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currencyCode")
    public String currencyCode;
    public BookingBook200ApplicationJsonData withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("distributorRef")
    public String distributorRef;
    public BookingBook200ApplicationJsonData withDistributorRef(String distributorRef) {
        this.distributorRef = distributorRef;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exchangeRate")
    public Long exchangeRate;
    public BookingBook200ApplicationJsonData withExchangeRate(Long exchangeRate) {
        this.exchangeRate = exchangeRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hasVoucher")
    public Boolean hasVoucher;
    public BookingBook200ApplicationJsonData withHasVoucher(Boolean hasVoucher) {
        this.hasVoucher = hasVoucher;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemSummaries")
    public BookingBook200ApplicationJsonDataItemSummaries[] itemSummaries;
    public BookingBook200ApplicationJsonData withItemSummaries(BookingBook200ApplicationJsonDataItemSummaries[] itemSummaries) {
        this.itemSummaries = itemSummaries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itineraryId")
    public Long itineraryId;
    public BookingBook200ApplicationJsonData withItineraryId(Long itineraryId) {
        this.itineraryId = itineraryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("omniPreRuleList")
    public String omniPreRuleList;
    public BookingBook200ApplicationJsonData withOmniPreRuleList(String omniPreRuleList) {
        this.omniPreRuleList = omniPreRuleList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paypalRedirectURL")
    public String paypalRedirectURL;
    public BookingBook200ApplicationJsonData withPaypalRedirectUrl(String paypalRedirectURL) {
        this.paypalRedirectURL = paypalRedirectURL;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rulesApplied")
    public String rulesApplied;
    public BookingBook200ApplicationJsonData withRulesApplied(String rulesApplied) {
        this.rulesApplied = rulesApplied;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("securityToken")
    public String securityToken;
    public BookingBook200ApplicationJsonData withSecurityToken(String securityToken) {
        this.securityToken = securityToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sortOrder")
    public Long sortOrder;
    public BookingBook200ApplicationJsonData withSortOrder(Long sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalPrice")
    public Double totalPrice;
    public BookingBook200ApplicationJsonData withTotalPrice(Double totalPrice) {
        this.totalPrice = totalPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalPriceFormatted")
    public String totalPriceFormatted;
    public BookingBook200ApplicationJsonData withTotalPriceFormatted(String totalPriceFormatted) {
        this.totalPriceFormatted = totalPriceFormatted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalPriceUSD")
    public Double totalPriceUSD;
    public BookingBook200ApplicationJsonData withTotalPriceUsd(Double totalPriceUSD) {
        this.totalPriceUSD = totalPriceUSD;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userId")
    public String userId;
    public BookingBook200ApplicationJsonData withUserId(String userId) {
        this.userId = userId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voucherKey")
    public String voucherKey;
    public BookingBook200ApplicationJsonData withVoucherKey(String voucherKey) {
        this.voucherKey = voucherKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voucherURL")
    public String voucherURL;
    public BookingBook200ApplicationJsonData withVoucherUrl(String voucherURL) {
        this.voucherURL = voucherURL;
        return this;
    }
}