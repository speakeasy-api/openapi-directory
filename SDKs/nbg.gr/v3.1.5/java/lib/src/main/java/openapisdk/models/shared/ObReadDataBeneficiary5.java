package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ObReadDataBeneficiary5 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Beneficiary")
    public ObBeneficiary5[] beneficiary;
    public ObReadDataBeneficiary5 withBeneficiary(ObBeneficiary5[] beneficiary) {
        this.beneficiary = beneficiary;
        return this;
    }
}