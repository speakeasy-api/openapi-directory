package openapisdk.models.operations;



public class FetchWirelessRatePlanResponse {
    public String contentType;
    public FetchWirelessRatePlanResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchWirelessRatePlanResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewWirelessRatePlan previewWirelessRatePlan;
    public FetchWirelessRatePlanResponse withPreviewWirelessRatePlan(openapisdk.models.shared.PreviewWirelessRatePlan previewWirelessRatePlan) {
        this.previewWirelessRatePlan = previewWirelessRatePlan;
        return this;
    }
}