package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SignBlobRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("delegates")
    public String[] delegates;
    public SignBlobRequest withDelegates(String[] delegates) {
        this.delegates = delegates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payload")
    public String payload;
    public SignBlobRequest withPayload(String payload) {
        this.payload = payload;
        return this;
    }
}