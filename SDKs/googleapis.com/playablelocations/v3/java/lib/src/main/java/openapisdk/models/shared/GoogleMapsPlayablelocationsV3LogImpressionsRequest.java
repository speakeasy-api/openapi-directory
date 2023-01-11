package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleMapsPlayablelocationsV3LogImpressionsRequest
 * A request for logging impressions.
**/
public class GoogleMapsPlayablelocationsV3LogImpressionsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientInfo")
    public GoogleMapsUnityClientInfo clientInfo;
    public GoogleMapsPlayablelocationsV3LogImpressionsRequest withClientInfo(GoogleMapsUnityClientInfo clientInfo) {
        this.clientInfo = clientInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("impressions")
    public GoogleMapsPlayablelocationsV3Impression[] impressions;
    public GoogleMapsPlayablelocationsV3LogImpressionsRequest withImpressions(GoogleMapsPlayablelocationsV3Impression[] impressions) {
        this.impressions = impressions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestId")
    public String requestId;
    public GoogleMapsPlayablelocationsV3LogImpressionsRequest withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}