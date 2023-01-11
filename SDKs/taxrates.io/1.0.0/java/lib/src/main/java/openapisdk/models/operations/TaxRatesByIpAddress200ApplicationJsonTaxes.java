package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TaxRatesByIpAddress200ApplicationJsonTaxes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Country")
    public String country;
    public TaxRatesByIpAddress200ApplicationJsonTaxes withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public String type;
    public TaxRatesByIpAddress200ApplicationJsonTaxes withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data_name")
    public String dataName;
    public TaxRatesByIpAddress200ApplicationJsonTaxes withDataName(String dataName) {
        this.dataName = dataName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data_value")
    public String dataValue;
    public TaxRatesByIpAddress200ApplicationJsonTaxes withDataValue(String dataValue) {
        this.dataValue = dataValue;
        return this;
    }
}