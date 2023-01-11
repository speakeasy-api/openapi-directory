package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class HiuHealthInformationRequestResponseHiRequest {
    @JsonProperty("sessionStatus")
    public HiuHealthInformationRequestResponseHiRequestSessionStatusEnum sessionStatus;
    public HiuHealthInformationRequestResponseHiRequest withSessionStatus(HiuHealthInformationRequestResponseHiRequestSessionStatusEnum sessionStatus) {
        this.sessionStatus = sessionStatus;
        return this;
    }
    @JsonProperty("transactionId")
    public String transactionId;
    public HiuHealthInformationRequestResponseHiRequest withTransactionId(String transactionId) {
        this.transactionId = transactionId;
        return this;
    }
}