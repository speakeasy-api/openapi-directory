package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AllowanceCharge {
    @JsonProperty("amountExcludingVat")
    public Double amountExcludingVat;
    public AllowanceCharge withAmountExcludingVat(Double amountExcludingVat) {
        this.amountExcludingVat = amountExcludingVat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public String reason;
    public AllowanceCharge withReason(String reason) {
        this.reason = reason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reasonCode")
    public String reasonCode;
    public AllowanceCharge withReasonCode(String reasonCode) {
        this.reasonCode = reasonCode;
        return this;
    }
    @JsonProperty("tax")
    public Tax tax;
    public AllowanceCharge withTax(Tax tax) {
        this.tax = tax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxes_duties_fees")
    public Tax[] taxesDutiesFees;
    public AllowanceCharge withTaxesDutiesFees(Tax[] taxesDutiesFees) {
        this.taxesDutiesFees = taxesDutiesFees;
        return this;
    }
}