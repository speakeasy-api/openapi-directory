package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AllTaxRates200ApplicationJsonRates {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data_name")
    public String dataName;
    public AllTaxRates200ApplicationJsonRates withDataName(String dataName) {
        this.dataName = dataName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data_value")
    public String dataValue;
    public AllTaxRates200ApplicationJsonRates withDataValue(String dataValue) {
        this.dataValue = dataValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("product_code")
    public String productCode;
    public AllTaxRates200ApplicationJsonRates withProductCode(String productCode) {
        this.productCode = productCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public AllTaxRates200ApplicationJsonRates withType(String type) {
        this.type = type;
        return this;
    }
}