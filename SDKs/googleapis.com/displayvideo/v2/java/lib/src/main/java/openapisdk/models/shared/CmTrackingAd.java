package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CmTrackingAd
 * A Campaign Manager 360 tracking ad.
**/
public class CmTrackingAd {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cmAdId")
    public String cmAdId;
    public CmTrackingAd withCmAdId(String cmAdId) {
        this.cmAdId = cmAdId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cmCreativeId")
    public String cmCreativeId;
    public CmTrackingAd withCmCreativeId(String cmCreativeId) {
        this.cmCreativeId = cmCreativeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cmPlacementId")
    public String cmPlacementId;
    public CmTrackingAd withCmPlacementId(String cmPlacementId) {
        this.cmPlacementId = cmPlacementId;
        return this;
    }
}