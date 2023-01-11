package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ObWriteInternationalScheduledConsentResponse6DataCharges
 * Set of elements used to provide details of a charge for the payment initiation.
**/
public class ObWriteInternationalScheduledConsentResponse6DataCharges {
    @JsonProperty("Amount")
    public ObActiveOrHistoricCurrencyAndAmount amount;
    public ObWriteInternationalScheduledConsentResponse6DataCharges withAmount(ObActiveOrHistoricCurrencyAndAmount amount) {
        this.amount = amount;
        return this;
    }
    @JsonProperty("ChargeBearer")
    public ObChargeBearerType1CodeEnum chargeBearer;
    public ObWriteInternationalScheduledConsentResponse6DataCharges withChargeBearer(ObChargeBearerType1CodeEnum chargeBearer) {
        this.chargeBearer = chargeBearer;
        return this;
    }
    @JsonProperty("Type")
    public String type;
    public ObWriteInternationalScheduledConsentResponse6DataCharges withType(String type) {
        this.type = type;
        return this;
    }
}