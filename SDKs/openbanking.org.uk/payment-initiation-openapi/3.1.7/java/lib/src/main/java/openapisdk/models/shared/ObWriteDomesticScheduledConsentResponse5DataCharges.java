package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ObWriteDomesticScheduledConsentResponse5DataCharges
 * Set of elements used to provide details of a charge for the payment initiation.
**/
public class ObWriteDomesticScheduledConsentResponse5DataCharges {
    @JsonProperty("Amount")
    public ObActiveOrHistoricCurrencyAndAmount amount;
    public ObWriteDomesticScheduledConsentResponse5DataCharges withAmount(ObActiveOrHistoricCurrencyAndAmount amount) {
        this.amount = amount;
        return this;
    }
    @JsonProperty("ChargeBearer")
    public ObChargeBearerType1CodeEnum chargeBearer;
    public ObWriteDomesticScheduledConsentResponse5DataCharges withChargeBearer(ObChargeBearerType1CodeEnum chargeBearer) {
        this.chargeBearer = chargeBearer;
        return this;
    }
    @JsonProperty("Type")
    public String type;
    public ObWriteDomesticScheduledConsentResponse5DataCharges withType(String type) {
        this.type = type;
        return this;
    }
}