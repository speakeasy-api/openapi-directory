package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReportGoogleLocationRequest
 * Request message for reporting a GoogleLocation.
**/
public class ReportGoogleLocationRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locationGroupName")
    public String locationGroupName;
    public ReportGoogleLocationRequest withLocationGroupName(String locationGroupName) {
        this.locationGroupName = locationGroupName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportReasonBadLocation")
    public ReportGoogleLocationRequestReportReasonBadLocationEnum reportReasonBadLocation;
    public ReportGoogleLocationRequest withReportReasonBadLocation(ReportGoogleLocationRequestReportReasonBadLocationEnum reportReasonBadLocation) {
        this.reportReasonBadLocation = reportReasonBadLocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportReasonBadRecommendation")
    public ReportGoogleLocationRequestReportReasonBadRecommendationEnum reportReasonBadRecommendation;
    public ReportGoogleLocationRequest withReportReasonBadRecommendation(ReportGoogleLocationRequestReportReasonBadRecommendationEnum reportReasonBadRecommendation) {
        this.reportReasonBadRecommendation = reportReasonBadRecommendation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportReasonElaboration")
    public String reportReasonElaboration;
    public ReportGoogleLocationRequest withReportReasonElaboration(String reportReasonElaboration) {
        this.reportReasonElaboration = reportReasonElaboration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportReasonLanguageCode")
    public String reportReasonLanguageCode;
    public ReportGoogleLocationRequest withReportReasonLanguageCode(String reportReasonLanguageCode) {
        this.reportReasonLanguageCode = reportReasonLanguageCode;
        return this;
    }
}