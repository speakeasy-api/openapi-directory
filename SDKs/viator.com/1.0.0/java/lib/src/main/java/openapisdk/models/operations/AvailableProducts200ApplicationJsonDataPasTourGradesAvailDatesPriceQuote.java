package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AvailableProducts200ApplicationJsonDataPasTourGradesAvailDatesPriceQuote
 * **pricing object** for *this* tour grade
**/
public class AvailableProducts200ApplicationJsonDataPasTourGradesAvailDatesPriceQuote {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("generalRetailPrice")
    public String generalRetailPrice;
    public AvailableProducts200ApplicationJsonDataPasTourGradesAvailDatesPriceQuote withGeneralRetailPrice(String generalRetailPrice) {
        this.generalRetailPrice = generalRetailPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merchantNetPrice")
    public String merchantNetPrice;
    public AvailableProducts200ApplicationJsonDataPasTourGradesAvailDatesPriceQuote withMerchantNetPrice(String merchantNetPrice) {
        this.merchantNetPrice = merchantNetPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("retailPrice")
    public String retailPrice;
    public AvailableProducts200ApplicationJsonDataPasTourGradesAvailDatesPriceQuote withRetailPrice(String retailPrice) {
        this.retailPrice = retailPrice;
        return this;
    }
}