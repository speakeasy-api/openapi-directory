package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AvailableProductsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currencyCode")
    public String currencyCode;
    public AvailableProductsRequestBody withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endDate")
    public String endDate;
    public AvailableProductsRequestBody withEndDate(String endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numAdults")
    public Long numAdults;
    public AvailableProductsRequestBody withNumAdults(Long numAdults) {
        this.numAdults = numAdults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productCodes")
    public String[] productCodes;
    public AvailableProductsRequestBody withProductCodes(String[] productCodes) {
        this.productCodes = productCodes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startDate")
    public String startDate;
    public AvailableProductsRequestBody withStartDate(String startDate) {
        this.startDate = startDate;
        return this;
    }
}