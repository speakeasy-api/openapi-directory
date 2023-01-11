package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ConvertedRegionPrice {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public Money price;
    public ConvertedRegionPrice withPrice(Money price) {
        this.price = price;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regionCode")
    public String regionCode;
    public ConvertedRegionPrice withRegionCode(String regionCode) {
        this.regionCode = regionCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxAmount")
    public Money taxAmount;
    public ConvertedRegionPrice withTaxAmount(Money taxAmount) {
        this.taxAmount = taxAmount;
        return this;
    }
}