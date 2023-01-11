package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class InvoiceSummaryAdditionalChargeSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalAmount")
    public Amount totalAmount;
    public InvoiceSummaryAdditionalChargeSummary withTotalAmount(Amount totalAmount) {
        this.totalAmount = totalAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public InvoiceSummaryAdditionalChargeSummary withType(String type) {
        this.type = type;
        return this;
    }
}