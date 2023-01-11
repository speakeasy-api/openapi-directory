package openapisdk.models.operations;



public class UpdateUsageTriggerResponse {
    public String contentType;
    public UpdateUsageTriggerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateUsageTriggerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountUsageUsageTrigger apiV2010AccountUsageUsageTrigger;
    public UpdateUsageTriggerResponse withApiV2010AccountUsageUsageTrigger(openapisdk.models.shared.ApiV2010AccountUsageUsageTrigger apiV2010AccountUsageUsageTrigger) {
        this.apiV2010AccountUsageUsageTrigger = apiV2010AccountUsageUsageTrigger;
        return this;
    }
}