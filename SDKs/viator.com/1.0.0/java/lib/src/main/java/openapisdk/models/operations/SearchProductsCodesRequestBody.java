package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SearchProductsCodesRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currencyCode")
    public String currencyCode;
    public SearchProductsCodesRequestBody withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productCodes")
    public String[] productCodes;
    public SearchProductsCodesRequestBody withProductCodes(String[] productCodes) {
        this.productCodes = productCodes;
        return this;
    }
}