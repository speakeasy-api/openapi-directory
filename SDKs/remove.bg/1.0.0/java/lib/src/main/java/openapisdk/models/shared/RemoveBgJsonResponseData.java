package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RemoveBgJsonResponseData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("result_b64")
    public String resultB64;
    public RemoveBgJsonResponseData withResultB64(String resultB64) {
        this.resultB64 = resultB64;
        return this;
    }
}