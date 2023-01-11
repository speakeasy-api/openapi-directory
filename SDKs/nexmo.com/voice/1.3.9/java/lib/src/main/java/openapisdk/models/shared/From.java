package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * From
 * The endpoint you called from. Possible values are the same as `to`.
**/
public class From {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("number")
    public String number;
    public From withNumber(String number) {
        this.number = number;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public From withType(String type) {
        this.type = type;
        return this;
    }
}