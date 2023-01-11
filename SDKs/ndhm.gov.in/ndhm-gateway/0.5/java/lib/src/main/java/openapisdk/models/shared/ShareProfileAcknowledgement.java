package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ShareProfileAcknowledgement {
    @JsonProperty("healthId")
    public String healthId;
    public ShareProfileAcknowledgement withHealthId(String healthId) {
        this.healthId = healthId;
        return this;
    }
    @JsonProperty("status")
    public ShareProfileAcknowledgementStatusEnum status;
    public ShareProfileAcknowledgement withStatus(ShareProfileAcknowledgementStatusEnum status) {
        this.status = status;
        return this;
    }
}