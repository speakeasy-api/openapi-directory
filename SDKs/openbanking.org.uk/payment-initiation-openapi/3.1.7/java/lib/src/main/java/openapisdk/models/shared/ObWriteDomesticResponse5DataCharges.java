package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ObWriteDomesticResponse5DataCharges
 * Set of elements used to provide details of a charge for the payment initiation.
**/
public class ObWriteDomesticResponse5DataCharges {
    @JsonProperty("Amount")
    public ObActiveOrHistoricCurrencyAndAmount amount;
    public ObWriteDomesticResponse5DataCharges withAmount(ObActiveOrHistoricCurrencyAndAmount amount) {
        this.amount = amount;
        return this;
    }
    @JsonProperty("ChargeBearer")
    public ObChargeBearerType1CodeEnum chargeBearer;
    public ObWriteDomesticResponse5DataCharges withChargeBearer(ObChargeBearerType1CodeEnum chargeBearer) {
        this.chargeBearer = chargeBearer;
        return this;
    }
    @JsonProperty("Type")
    public String type;
    public ObWriteDomesticResponse5DataCharges withType(String type) {
        this.type = type;
        return this;
    }
}