package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Standard
 * Standard represents the standard deployment strategy.
**/
public class Standard {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verify")
    public Boolean verify;
    public Standard withVerify(Boolean verify) {
        this.verify = verify;
        return this;
    }
}