package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ObWriteInternationalStandingOrderConsentResponse7DataCharges
 * Set of elements used to provide details of a charge for the payment initiation.
**/
public class ObWriteInternationalStandingOrderConsentResponse7DataCharges {
    @JsonProperty("Amount")
    public ObActiveOrHistoricCurrencyAndAmount amount;
    public ObWriteInternationalStandingOrderConsentResponse7DataCharges withAmount(ObActiveOrHistoricCurrencyAndAmount amount) {
        this.amount = amount;
        return this;
    }
    @JsonProperty("ChargeBearer")
    public ObChargeBearerType1CodeEnum chargeBearer;
    public ObWriteInternationalStandingOrderConsentResponse7DataCharges withChargeBearer(ObChargeBearerType1CodeEnum chargeBearer) {
        this.chargeBearer = chargeBearer;
        return this;
    }
    @JsonProperty("Type")
    public String type;
    public ObWriteInternationalStandingOrderConsentResponse7DataCharges withType(String type) {
        this.type = type;
        return this;
    }
}