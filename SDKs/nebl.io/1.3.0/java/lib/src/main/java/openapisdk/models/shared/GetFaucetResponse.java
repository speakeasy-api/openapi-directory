package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetFaucetResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public GetFaucetResponseData data;
    public GetFaucetResponse withData(GetFaucetResponseData data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public GetFaucetResponse withStatus(String status) {
        this.status = status;
        return this;
    }
}