package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SendTokenRequest {
    @JsonProperty("fee")
    public Double fee;
    public SendTokenRequest withFee(Double fee) {
        this.fee = fee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flags")
    public SendTokenRequestFlags flags;
    public SendTokenRequest withFlags(SendTokenRequestFlags flags) {
        this.flags = flags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("from")
    public String[] from;
    public SendTokenRequest withFrom(String[] from) {
        this.from = from;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public SendTokenRequestMetadata metadata;
    public SendTokenRequest withMetadata(SendTokenRequestMetadata metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sendutxo")
    public String[] sendutxo;
    public SendTokenRequest withSendutxo(String[] sendutxo) {
        this.sendutxo = sendutxo;
        return this;
    }
    @JsonProperty("to")
    public SendTokenRequestTo[] to;
    public SendTokenRequest withTo(SendTokenRequestTo[] to) {
        this.to = to;
        return this;
    }
}