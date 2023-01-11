package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReportMetadata
 * Report metadata.
**/
public class ReportMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("googleCloudStoragePath")
    public String googleCloudStoragePath;
    public ReportMetadata withGoogleCloudStoragePath(String googleCloudStoragePath) {
        this.googleCloudStoragePath = googleCloudStoragePath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportDataEndTimeMs")
    public String reportDataEndTimeMs;
    public ReportMetadata withReportDataEndTimeMs(String reportDataEndTimeMs) {
        this.reportDataEndTimeMs = reportDataEndTimeMs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportDataStartTimeMs")
    public String reportDataStartTimeMs;
    public ReportMetadata withReportDataStartTimeMs(String reportDataStartTimeMs) {
        this.reportDataStartTimeMs = reportDataStartTimeMs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ReportStatus status;
    public ReportMetadata withStatus(ReportStatus status) {
        this.status = status;
        return this;
    }
}