package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ObWriteDomesticStandingOrderResponse6DataCharges
 * Set of elements used to provide details of a charge for the payment initiation.
**/
public class ObWriteDomesticStandingOrderResponse6DataCharges {
    @JsonProperty("Amount")
    public ObActiveOrHistoricCurrencyAndAmount amount;
    public ObWriteDomesticStandingOrderResponse6DataCharges withAmount(ObActiveOrHistoricCurrencyAndAmount amount) {
        this.amount = amount;
        return this;
    }
    @JsonProperty("ChargeBearer")
    public ObChargeBearerType1CodeEnum chargeBearer;
    public ObWriteDomesticStandingOrderResponse6DataCharges withChargeBearer(ObChargeBearerType1CodeEnum chargeBearer) {
        this.chargeBearer = chargeBearer;
        return this;
    }
    @JsonProperty("Type")
    public String type;
    public ObWriteDomesticStandingOrderResponse6DataCharges withType(String type) {
        this.type = type;
        return this;
    }
}