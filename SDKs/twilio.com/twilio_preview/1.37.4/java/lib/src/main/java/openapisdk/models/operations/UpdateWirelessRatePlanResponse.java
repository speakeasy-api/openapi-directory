package openapisdk.models.operations;



public class UpdateWirelessRatePlanResponse {
    public String contentType;
    public UpdateWirelessRatePlanResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateWirelessRatePlanResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewWirelessRatePlan previewWirelessRatePlan;
    public UpdateWirelessRatePlanResponse withPreviewWirelessRatePlan(openapisdk.models.shared.PreviewWirelessRatePlan previewWirelessRatePlan) {
        this.previewWirelessRatePlan = previewWirelessRatePlan;
        return this;
    }
}