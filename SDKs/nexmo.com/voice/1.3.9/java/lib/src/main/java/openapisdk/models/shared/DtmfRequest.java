package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DtmfRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("digits")
    public String digits;
    public DtmfRequest withDigits(String digits) {
        this.digits = digits;
        return this;
    }
}