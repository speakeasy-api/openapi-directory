package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BulkexportsV1ExportExportCustomJob {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("details")
    public Object details;
    public BulkexportsV1ExportExportCustomJob withDetails(Object details) {
        this.details = details;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public BulkexportsV1ExportExportCustomJob withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end_day")
    public String endDay;
    public BulkexportsV1ExportExportCustomJob withEndDay(String endDay) {
        this.endDay = endDay;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("estimated_completion_time")
    public String estimatedCompletionTime;
    public BulkexportsV1ExportExportCustomJob withEstimatedCompletionTime(String estimatedCompletionTime) {
        this.estimatedCompletionTime = estimatedCompletionTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("friendly_name")
    public String friendlyName;
    public BulkexportsV1ExportExportCustomJob withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("job_queue_position")
    public String jobQueuePosition;
    public BulkexportsV1ExportExportCustomJob withJobQueuePosition(String jobQueuePosition) {
        this.jobQueuePosition = jobQueuePosition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("job_sid")
    public String jobSid;
    public BulkexportsV1ExportExportCustomJob withJobSid(String jobSid) {
        this.jobSid = jobSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_type")
    public String resourceType;
    public BulkexportsV1ExportExportCustomJob withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start_day")
    public String startDay;
    public BulkexportsV1ExportExportCustomJob withStartDay(String startDay) {
        this.startDay = startDay;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webhook_method")
    public String webhookMethod;
    public BulkexportsV1ExportExportCustomJob withWebhookMethod(String webhookMethod) {
        this.webhookMethod = webhookMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webhook_url")
    public String webhookUrl;
    public BulkexportsV1ExportExportCustomJob withWebhookUrl(String webhookUrl) {
        this.webhookUrl = webhookUrl;
        return this;
    }
}