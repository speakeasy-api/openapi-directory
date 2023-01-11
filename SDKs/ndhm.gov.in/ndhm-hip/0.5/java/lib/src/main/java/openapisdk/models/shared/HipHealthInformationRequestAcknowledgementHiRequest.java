package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class HipHealthInformationRequestAcknowledgementHiRequest {
    @JsonProperty("sessionStatus")
    public HipHealthInformationRequestAcknowledgementHiRequestSessionStatusEnum sessionStatus;
    public HipHealthInformationRequestAcknowledgementHiRequest withSessionStatus(HipHealthInformationRequestAcknowledgementHiRequestSessionStatusEnum sessionStatus) {
        this.sessionStatus = sessionStatus;
        return this;
    }
    @JsonProperty("transactionId")
    public String transactionId;
    public HipHealthInformationRequestAcknowledgementHiRequest withTransactionId(String transactionId) {
        this.transactionId = transactionId;
        return this;
    }
}