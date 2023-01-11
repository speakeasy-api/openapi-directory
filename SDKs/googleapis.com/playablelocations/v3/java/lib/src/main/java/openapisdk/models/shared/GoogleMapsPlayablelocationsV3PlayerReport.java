package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleMapsPlayablelocationsV3PlayerReport
 * A report submitted by a player about a playable location that is considered inappropriate for use in the game.
**/
public class GoogleMapsPlayablelocationsV3PlayerReport {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languageCode")
    public String languageCode;
    public GoogleMapsPlayablelocationsV3PlayerReport withLanguageCode(String languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locationName")
    public String locationName;
    public GoogleMapsPlayablelocationsV3PlayerReport withLocationName(String locationName) {
        this.locationName = locationName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reasonDetails")
    public String reasonDetails;
    public GoogleMapsPlayablelocationsV3PlayerReport withReasonDetails(String reasonDetails) {
        this.reasonDetails = reasonDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reasons")
    public GoogleMapsPlayablelocationsV3PlayerReportReasonsEnum[] reasons;
    public GoogleMapsPlayablelocationsV3PlayerReport withReasons(GoogleMapsPlayablelocationsV3PlayerReportReasonsEnum[] reasons) {
        this.reasons = reasons;
        return this;
    }
}