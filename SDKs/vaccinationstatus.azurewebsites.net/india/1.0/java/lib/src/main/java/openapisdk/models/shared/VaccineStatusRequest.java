package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class VaccineStatusRequest {
    @JsonProperty("beneficiaryId")
    public String beneficiaryId;
    public VaccineStatusRequest withBeneficiaryId(String beneficiaryId) {
        this.beneficiaryId = beneficiaryId;
        return this;
    }
    @JsonProperty("mobile")
    public String mobile;
    public VaccineStatusRequest withMobile(String mobile) {
        this.mobile = mobile;
        return this;
    }
}