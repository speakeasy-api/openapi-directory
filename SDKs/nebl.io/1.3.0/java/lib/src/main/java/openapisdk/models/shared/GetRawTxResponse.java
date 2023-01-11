package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetRawTxResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rawtx")
    public String rawtx;
    public GetRawTxResponse withRawtx(String rawtx) {
        this.rawtx = rawtx;
        return this;
    }
}