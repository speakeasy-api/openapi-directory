package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ObWriteInternationalStandingOrderResponse7DataCharges
 * Set of elements used to provide details of a charge for the payment initiation.
**/
public class ObWriteInternationalStandingOrderResponse7DataCharges {
    @JsonProperty("Amount")
    public ObActiveOrHistoricCurrencyAndAmount amount;
    public ObWriteInternationalStandingOrderResponse7DataCharges withAmount(ObActiveOrHistoricCurrencyAndAmount amount) {
        this.amount = amount;
        return this;
    }
    @JsonProperty("ChargeBearer")
    public ObChargeBearerType1CodeEnum chargeBearer;
    public ObWriteInternationalStandingOrderResponse7DataCharges withChargeBearer(ObChargeBearerType1CodeEnum chargeBearer) {
        this.chargeBearer = chargeBearer;
        return this;
    }
    @JsonProperty("Type")
    public String type;
    public ObWriteInternationalStandingOrderResponse7DataCharges withType(String type) {
        this.type = type;
        return this;
    }
}