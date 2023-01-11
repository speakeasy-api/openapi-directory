package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Strategy
 * Strategy contains deployment strategy information.
**/
public class Strategy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("standard")
    public Standard standard;
    public Strategy withStandard(Standard standard) {
        this.standard = standard;
        return this;
    }
}