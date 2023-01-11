package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BookingPricingmatrix200ApplicationJsonDataAgeBandPricesPrices {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currencyCode")
    public String currencyCode;
    public BookingPricingmatrix200ApplicationJsonDataAgeBandPricesPrices withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merchantNetPrice")
    public Double merchantNetPrice;
    public BookingPricingmatrix200ApplicationJsonDataAgeBandPricesPrices withMerchantNetPrice(Double merchantNetPrice) {
        this.merchantNetPrice = merchantNetPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merchantNetPriceFormatted")
    public String merchantNetPriceFormatted;
    public BookingPricingmatrix200ApplicationJsonDataAgeBandPricesPrices withMerchantNetPriceFormatted(String merchantNetPriceFormatted) {
        this.merchantNetPriceFormatted = merchantNetPriceFormatted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minNoOfTravellersRequiredForPrice")
    public Long minNoOfTravellersRequiredForPrice;
    public BookingPricingmatrix200ApplicationJsonDataAgeBandPricesPrices withMinNoOfTravellersRequiredForPrice(Long minNoOfTravellersRequiredForPrice) {
        this.minNoOfTravellersRequiredForPrice = minNoOfTravellersRequiredForPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public Double price;
    public BookingPricingmatrix200ApplicationJsonDataAgeBandPricesPrices withPrice(Double price) {
        this.price = price;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priceFormatted")
    public String priceFormatted;
    public BookingPricingmatrix200ApplicationJsonDataAgeBandPricesPrices withPriceFormatted(String priceFormatted) {
        this.priceFormatted = priceFormatted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sortOrder")
    public String sortOrder;
    public BookingPricingmatrix200ApplicationJsonDataAgeBandPricesPrices withSortOrder(String sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
}