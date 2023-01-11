package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ObWriteFileConsentResponse4DataCharges
 * Set of elements used to provide details of a charge for the payment initiation.
**/
public class ObWriteFileConsentResponse4DataCharges {
    @JsonProperty("Amount")
    public ObActiveOrHistoricCurrencyAndAmount amount;
    public ObWriteFileConsentResponse4DataCharges withAmount(ObActiveOrHistoricCurrencyAndAmount amount) {
        this.amount = amount;
        return this;
    }
    @JsonProperty("ChargeBearer")
    public ObChargeBearerType1CodeEnum chargeBearer;
    public ObWriteFileConsentResponse4DataCharges withChargeBearer(ObChargeBearerType1CodeEnum chargeBearer) {
        this.chargeBearer = chargeBearer;
        return this;
    }
    @JsonProperty("Type")
    public String type;
    public ObWriteFileConsentResponse4DataCharges withType(String type) {
        this.type = type;
        return this;
    }
}