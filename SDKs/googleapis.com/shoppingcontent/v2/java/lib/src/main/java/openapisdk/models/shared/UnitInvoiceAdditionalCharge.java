package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UnitInvoiceAdditionalCharge {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalChargeAmount")
    public Amount additionalChargeAmount;
    public UnitInvoiceAdditionalCharge withAdditionalChargeAmount(Amount additionalChargeAmount) {
        this.additionalChargeAmount = additionalChargeAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalChargePromotions")
    public Promotion[] additionalChargePromotions;
    public UnitInvoiceAdditionalCharge withAdditionalChargePromotions(Promotion[] additionalChargePromotions) {
        this.additionalChargePromotions = additionalChargePromotions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public UnitInvoiceAdditionalCharge withType(String type) {
        this.type = type;
        return this;
    }
}