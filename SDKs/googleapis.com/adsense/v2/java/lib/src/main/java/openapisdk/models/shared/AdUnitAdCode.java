package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AdUnitAdCode
 * Representation of the ad unit code for a given ad unit. For more information, see [About the AdSense code](https://support.google.com/adsense/answer/9274634) and [Where to place the ad code in your HTML](https://support.google.com/adsense/answer/9190028).
**/
public class AdUnitAdCode {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adCode")
    public String adCode;
    public AdUnitAdCode withAdCode(String adCode) {
        this.adCode = adCode;
        return this;
    }
}