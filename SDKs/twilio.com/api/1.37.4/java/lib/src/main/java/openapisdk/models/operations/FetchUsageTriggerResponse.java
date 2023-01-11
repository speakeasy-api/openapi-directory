package openapisdk.models.operations;



public class FetchUsageTriggerResponse {
    public String contentType;
    public FetchUsageTriggerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchUsageTriggerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountUsageUsageTrigger apiV2010AccountUsageUsageTrigger;
    public FetchUsageTriggerResponse withApiV2010AccountUsageUsageTrigger(openapisdk.models.shared.ApiV2010AccountUsageUsageTrigger apiV2010AccountUsageUsageTrigger) {
        this.apiV2010AccountUsageUsageTrigger = apiV2010AccountUsageUsageTrigger;
        return this;
    }
}