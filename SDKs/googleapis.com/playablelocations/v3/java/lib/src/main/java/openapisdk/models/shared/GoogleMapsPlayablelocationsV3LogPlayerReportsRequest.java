package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleMapsPlayablelocationsV3LogPlayerReportsRequest
 * A request for logging your player's bad location reports.
**/
public class GoogleMapsPlayablelocationsV3LogPlayerReportsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientInfo")
    public GoogleMapsUnityClientInfo clientInfo;
    public GoogleMapsPlayablelocationsV3LogPlayerReportsRequest withClientInfo(GoogleMapsUnityClientInfo clientInfo) {
        this.clientInfo = clientInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("playerReports")
    public GoogleMapsPlayablelocationsV3PlayerReport[] playerReports;
    public GoogleMapsPlayablelocationsV3LogPlayerReportsRequest withPlayerReports(GoogleMapsPlayablelocationsV3PlayerReport[] playerReports) {
        this.playerReports = playerReports;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestId")
    public String requestId;
    public GoogleMapsPlayablelocationsV3LogPlayerReportsRequest withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}