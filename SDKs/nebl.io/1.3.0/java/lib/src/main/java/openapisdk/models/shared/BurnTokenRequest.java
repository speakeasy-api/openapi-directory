package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BurnTokenRequest {
    @JsonProperty("burn")
    public BurnTokenRequestBurn[] burn;
    public BurnTokenRequest withBurn(BurnTokenRequestBurn[] burn) {
        this.burn = burn;
        return this;
    }
    @JsonProperty("fee")
    public Double fee;
    public BurnTokenRequest withFee(Double fee) {
        this.fee = fee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("from")
    public String[] from;
    public BurnTokenRequest withFrom(String[] from) {
        this.from = from;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transfer")
    public BurnTokenRequestTransfer[] transfer;
    public BurnTokenRequest withTransfer(BurnTokenRequestTransfer[] transfer) {
        this.transfer = transfer;
        return this;
    }
}