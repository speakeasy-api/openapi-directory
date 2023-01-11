package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TransferRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fromOfferingId")
    public String fromOfferingId;
    public TransferRequest withFromOfferingId(String fromOfferingId) {
        this.fromOfferingId = fromOfferingId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sendInvite")
    public Boolean sendInvite;
    public TransferRequest withSendInvite(Boolean sendInvite) {
        this.sendInvite = sendInvite;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("toOfferingId")
    public String toOfferingId;
    public TransferRequest withToOfferingId(String toOfferingId) {
        this.toOfferingId = toOfferingId;
        return this;
    }
}