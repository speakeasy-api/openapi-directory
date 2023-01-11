package openapisdk.models.operations;



public class CreateUsageTriggerResponse {
    public String contentType;
    public CreateUsageTriggerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateUsageTriggerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountUsageUsageTrigger apiV2010AccountUsageUsageTrigger;
    public CreateUsageTriggerResponse withApiV2010AccountUsageUsageTrigger(openapisdk.models.shared.ApiV2010AccountUsageUsageTrigger apiV2010AccountUsageUsageTrigger) {
        this.apiV2010AccountUsageUsageTrigger = apiV2010AccountUsageUsageTrigger;
        return this;
    }
}