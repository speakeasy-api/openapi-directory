package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SendTxRequest {
    @JsonProperty("rawtx")
    public String rawtx;
    public SendTxRequest withRawtx(String rawtx) {
        this.rawtx = rawtx;
        return this;
    }
}