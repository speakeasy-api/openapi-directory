package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UnitInvoiceTaxLine {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxAmount")
    public Price taxAmount;
    public UnitInvoiceTaxLine withTaxAmount(Price taxAmount) {
        this.taxAmount = taxAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxName")
    public String taxName;
    public UnitInvoiceTaxLine withTaxName(String taxName) {
        this.taxName = taxName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxType")
    public String taxType;
    public UnitInvoiceTaxLine withTaxType(String taxType) {
        this.taxType = taxType;
        return this;
    }
}