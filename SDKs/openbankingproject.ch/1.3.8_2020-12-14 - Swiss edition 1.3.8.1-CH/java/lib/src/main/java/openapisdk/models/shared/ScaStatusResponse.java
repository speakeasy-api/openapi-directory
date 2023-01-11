package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ScaStatusResponse
 * Body of the JSON response with SCA Status.
**/
public class ScaStatusResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("psuMessage")
    public String psuMessage;
    public ScaStatusResponse withPsuMessage(String psuMessage) {
        this.psuMessage = psuMessage;
        return this;
    }
    @JsonProperty("scaStatus")
    public ScaStatusEnum scaStatus;
    public ScaStatusResponse withScaStatus(ScaStatusEnum scaStatus) {
        this.scaStatus = scaStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trustedBeneficiaryFlag")
    public Boolean trustedBeneficiaryFlag;
    public ScaStatusResponse withTrustedBeneficiaryFlag(Boolean trustedBeneficiaryFlag) {
        this.trustedBeneficiaryFlag = trustedBeneficiaryFlag;
        return this;
    }
}