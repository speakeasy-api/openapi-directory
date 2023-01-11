package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateRemoteIdRequest2 {
    @JsonProperty("payorId")
    public String payorId;
    public UpdateRemoteIdRequest2 withPayorId(String payorId) {
        this.payorId = payorId;
        return this;
    }
    @JsonProperty("remoteId")
    public String remoteId;
    public UpdateRemoteIdRequest2 withRemoteId(String remoteId) {
        this.remoteId = remoteId;
        return this;
    }
}