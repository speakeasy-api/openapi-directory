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
    @JsonProperty("reportDataEndDate")
    public Date reportDataEndDate;
    public ReportMetadata withReportDataEndDate(Date reportDataEndDate) {
        this.reportDataEndDate = reportDataEndDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportDataStartDate")
    public Date reportDataStartDate;
    public ReportMetadata withReportDataStartDate(Date reportDataStartDate) {
        this.reportDataStartDate = reportDataStartDate;
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