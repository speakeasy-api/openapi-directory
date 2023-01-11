package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DoubleVerifyDisplayViewability
 * Details of DoubleVerify display viewability settings.
**/
public class DoubleVerifyDisplayViewability {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iab")
    public DoubleVerifyDisplayViewabilityIabEnum iab;
    public DoubleVerifyDisplayViewability withIab(DoubleVerifyDisplayViewabilityIabEnum iab) {
        this.iab = iab;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("viewableDuring")
    public DoubleVerifyDisplayViewabilityViewableDuringEnum viewableDuring;
    public DoubleVerifyDisplayViewability withViewableDuring(DoubleVerifyDisplayViewabilityViewableDuringEnum viewableDuring) {
        this.viewableDuring = viewableDuring;
        return this;
    }
}