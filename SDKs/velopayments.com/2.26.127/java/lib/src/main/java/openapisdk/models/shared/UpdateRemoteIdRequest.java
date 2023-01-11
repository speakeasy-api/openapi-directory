package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateRemoteIdRequest {
    @JsonProperty("payorId")
    public String payorId;
    public UpdateRemoteIdRequest withPayorId(String payorId) {
        this.payorId = payorId;
        return this;
    }
    @JsonProperty("remoteId")
    public String remoteId;
    public UpdateRemoteIdRequest withRemoteId(String remoteId) {
        this.remoteId = remoteId;
        return this;
    }
}