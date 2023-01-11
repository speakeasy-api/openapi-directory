package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BookingCalculateprice200ApplicationJsonData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currencyCode")
    public String currencyCode;
    public BookingCalculateprice200ApplicationJsonData withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hasPromoCode")
    public Boolean hasPromoCode;
    public BookingCalculateprice200ApplicationJsonData withHasPromoCode(Boolean hasPromoCode) {
        this.hasPromoCode = hasPromoCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itinerary")
    public BookingCalculateprice200ApplicationJsonDataItinerary itinerary;
    public BookingCalculateprice200ApplicationJsonData withItinerary(BookingCalculateprice200ApplicationJsonDataItinerary itinerary) {
        this.itinerary = itinerary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itineraryFromPrice")
    public Double itineraryFromPrice;
    public BookingCalculateprice200ApplicationJsonData withItineraryFromPrice(Double itineraryFromPrice) {
        this.itineraryFromPrice = itineraryFromPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itineraryFromPriceFormatted")
    public String itineraryFromPriceFormatted;
    public BookingCalculateprice200ApplicationJsonData withItineraryFromPriceFormatted(String itineraryFromPriceFormatted) {
        this.itineraryFromPriceFormatted = itineraryFromPriceFormatted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itineraryNewPrice")
    public Double itineraryNewPrice;
    public BookingCalculateprice200ApplicationJsonData withItineraryNewPrice(Double itineraryNewPrice) {
        this.itineraryNewPrice = itineraryNewPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itineraryNewPriceFormatted")
    public String itineraryNewPriceFormatted;
    public BookingCalculateprice200ApplicationJsonData withItineraryNewPriceFormatted(String itineraryNewPriceFormatted) {
        this.itineraryNewPriceFormatted = itineraryNewPriceFormatted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itinerarySaving")
    public Long itinerarySaving;
    public BookingCalculateprice200ApplicationJsonData withItinerarySaving(Long itinerarySaving) {
        this.itinerarySaving = itinerarySaving;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itinerarySavingFormatted")
    public String itinerarySavingFormatted;
    public BookingCalculateprice200ApplicationJsonData withItinerarySavingFormatted(String itinerarySavingFormatted) {
        this.itinerarySavingFormatted = itinerarySavingFormatted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentGatewayInfo")
    public String paymentGatewayInfo;
    public BookingCalculateprice200ApplicationJsonData withPaymentGatewayInfo(String paymentGatewayInfo) {
        this.paymentGatewayInfo = paymentGatewayInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("promoCode")
    public String promoCode;
    public BookingCalculateprice200ApplicationJsonData withPromoCode(String promoCode) {
        this.promoCode = promoCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("promoCodeExpired")
    public Boolean promoCodeExpired;
    public BookingCalculateprice200ApplicationJsonData withPromoCodeExpired(Boolean promoCodeExpired) {
        this.promoCodeExpired = promoCodeExpired;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("promoCodeValid")
    public Boolean promoCodeValid;
    public BookingCalculateprice200ApplicationJsonData withPromoCodeValid(Boolean promoCodeValid) {
        this.promoCodeValid = promoCodeValid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rulesApplied")
    public String[] rulesApplied;
    public BookingCalculateprice200ApplicationJsonData withRulesApplied(String[] rulesApplied) {
        this.rulesApplied = rulesApplied;
        return this;
    }
}