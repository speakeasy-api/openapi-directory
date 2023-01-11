package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class InvoiceTaxes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tax_amount")
    public Long taxAmount;
    public InvoiceTaxes withTaxAmount(Long taxAmount) {
        this.taxAmount = taxAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tax_name")
    public String taxName;
    public InvoiceTaxes withTaxName(String taxName) {
        this.taxName = taxName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tax_rate")
    public Float taxRate;
    public InvoiceTaxes withTaxRate(Float taxRate) {
        this.taxRate = taxRate;
        return this;
    }
}