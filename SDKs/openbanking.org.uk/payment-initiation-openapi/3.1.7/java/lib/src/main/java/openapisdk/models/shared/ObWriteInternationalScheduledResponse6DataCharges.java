package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ObWriteInternationalScheduledResponse6DataCharges
 * Set of elements used to provide details of a charge for the payment initiation.
**/
public class ObWriteInternationalScheduledResponse6DataCharges {
    @JsonProperty("Amount")
    public ObActiveOrHistoricCurrencyAndAmount amount;
    public ObWriteInternationalScheduledResponse6DataCharges withAmount(ObActiveOrHistoricCurrencyAndAmount amount) {
        this.amount = amount;
        return this;
    }
    @JsonProperty("ChargeBearer")
    public ObChargeBearerType1CodeEnum chargeBearer;
    public ObWriteInternationalScheduledResponse6DataCharges withChargeBearer(ObChargeBearerType1CodeEnum chargeBearer) {
        this.chargeBearer = chargeBearer;
        return this;
    }
    @JsonProperty("Type")
    public String type;
    public ObWriteInternationalScheduledResponse6DataCharges withType(String type) {
        this.type = type;
        return this;
    }
}