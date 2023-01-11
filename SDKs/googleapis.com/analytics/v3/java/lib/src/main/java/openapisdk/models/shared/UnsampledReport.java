package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * UnsampledReport
 * JSON template for Analytics unsampled report resource.
**/
public class UnsampledReport {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public UnsampledReport withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloudStorageDownloadDetails")
    public UnsampledReportCloudStorageDownloadDetails cloudStorageDownloadDetails;
    public UnsampledReport withCloudStorageDownloadDetails(UnsampledReportCloudStorageDownloadDetails cloudStorageDownloadDetails) {
        this.cloudStorageDownloadDetails = cloudStorageDownloadDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created")
    public OffsetDateTime created;
    public UnsampledReport withCreated(OffsetDateTime created) {
        this.created = created;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensions")
    public String dimensions;
    public UnsampledReport withDimensions(String dimensions) {
        this.dimensions = dimensions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("downloadType")
    public String downloadType;
    public UnsampledReport withDownloadType(String downloadType) {
        this.downloadType = downloadType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("driveDownloadDetails")
    public UnsampledReportDriveDownloadDetails driveDownloadDetails;
    public UnsampledReport withDriveDownloadDetails(UnsampledReportDriveDownloadDetails driveDownloadDetails) {
        this.driveDownloadDetails = driveDownloadDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end-date")
    public String endDate;
    public UnsampledReport withEndDate(String endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filters")
    public String filters;
    public UnsampledReport withFilters(String filters) {
        this.filters = filters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public UnsampledReport withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public UnsampledReport withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metrics")
    public String metrics;
    public UnsampledReport withMetrics(String metrics) {
        this.metrics = metrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profileId")
    public String profileId;
    public UnsampledReport withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("segment")
    public String segment;
    public UnsampledReport withSegment(String segment) {
        this.segment = segment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selfLink")
    public String selfLink;
    public UnsampledReport withSelfLink(String selfLink) {
        this.selfLink = selfLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start-date")
    public String startDate;
    public UnsampledReport withStartDate(String startDate) {
        this.startDate = startDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public UnsampledReport withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public UnsampledReport withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updated")
    public OffsetDateTime updated;
    public UnsampledReport withUpdated(OffsetDateTime updated) {
        this.updated = updated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webPropertyId")
    public String webPropertyId;
    public UnsampledReport withWebPropertyId(String webPropertyId) {
        this.webPropertyId = webPropertyId;
        return this;
    }
}