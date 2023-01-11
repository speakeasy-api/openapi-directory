package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class JobInfoJobInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("Created")
    public OffsetDateTime created;
    public JobInfoJobInfo withCreated(OffsetDateTime created) {
        this.created = created;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EmployerKey")
    public String employerKey;
    public JobInfoJobInfo withEmployerKey(String employerKey) {
        this.employerKey = employerKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Errors")
    public JobInfoJobInfoErrors errors;
    public JobInfoJobInfo withErrors(JobInfoJobInfoErrors errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("HoldingDate")
    public OffsetDateTime holdingDate;
    public JobInfoJobInfo withHoldingDate(OffsetDateTime holdingDate) {
        this.holdingDate = holdingDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JobId")
    public String jobId;
    public JobInfoJobInfo withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JobStatus")
    public JobInfoJobInfoJobStatusEnum jobStatus;
    public JobInfoJobInfo withJobStatus(JobInfoJobInfoJobStatusEnum jobStatus) {
        this.jobStatus = jobStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JobType")
    public String jobType;
    public JobInfoJobInfo withJobType(String jobType) {
        this.jobType = jobType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastUpdated")
    public OffsetDateTime lastUpdated;
    public JobInfoJobInfo withLastUpdated(OffsetDateTime lastUpdated) {
        this.lastUpdated = lastUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Progress")
    public Double progress;
    public JobInfoJobInfo withProgress(Double progress) {
        this.progress = progress;
        return this;
    }
}