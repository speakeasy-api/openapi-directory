package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * QueryMetadata
 * Query metadata.
**/
public class QueryMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataRange")
    public QueryMetadataDataRangeEnum dataRange;
    public QueryMetadata withDataRange(QueryMetadataDataRangeEnum dataRange) {
        this.dataRange = dataRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("format")
    public QueryMetadataFormatEnum format;
    public QueryMetadata withFormat(QueryMetadataFormatEnum format) {
        this.format = format;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("googleCloudStoragePathForLatestReport")
    public String googleCloudStoragePathForLatestReport;
    public QueryMetadata withGoogleCloudStoragePathForLatestReport(String googleCloudStoragePathForLatestReport) {
        this.googleCloudStoragePathForLatestReport = googleCloudStoragePathForLatestReport;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("googleDrivePathForLatestReport")
    public String googleDrivePathForLatestReport;
    public QueryMetadata withGoogleDrivePathForLatestReport(String googleDrivePathForLatestReport) {
        this.googleDrivePathForLatestReport = googleDrivePathForLatestReport;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latestReportRunTimeMs")
    public String latestReportRunTimeMs;
    public QueryMetadata withLatestReportRunTimeMs(String latestReportRunTimeMs) {
        this.latestReportRunTimeMs = latestReportRunTimeMs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locale")
    public String locale;
    public QueryMetadata withLocale(String locale) {
        this.locale = locale;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportCount")
    public Integer reportCount;
    public QueryMetadata withReportCount(Integer reportCount) {
        this.reportCount = reportCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("running")
    public Boolean running;
    public QueryMetadata withRunning(Boolean running) {
        this.running = running;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sendNotification")
    public Boolean sendNotification;
    public QueryMetadata withSendNotification(Boolean sendNotification) {
        this.sendNotification = sendNotification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shareEmailAddress")
    public String[] shareEmailAddress;
    public QueryMetadata withShareEmailAddress(String[] shareEmailAddress) {
        this.shareEmailAddress = shareEmailAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public QueryMetadata withTitle(String title) {
        this.title = title;
        return this;
    }
}