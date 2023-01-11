package openapisdk.models.operations;



public class CreateWirelessRatePlanResponse {
    public String contentType;
    public CreateWirelessRatePlanResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateWirelessRatePlanResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewWirelessRatePlan previewWirelessRatePlan;
    public CreateWirelessRatePlanResponse withPreviewWirelessRatePlan(openapisdk.models.shared.PreviewWirelessRatePlan previewWirelessRatePlan) {
        this.previewWirelessRatePlan = previewWirelessRatePlan;
        return this;
    }
}