package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * To
 * The single or mixed collection of endpoint types you connected to
**/
public class To {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("number")
    public String number;
    public To withNumber(String number) {
        this.number = number;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public To withType(String type) {
        this.type = type;
        return this;
    }
}