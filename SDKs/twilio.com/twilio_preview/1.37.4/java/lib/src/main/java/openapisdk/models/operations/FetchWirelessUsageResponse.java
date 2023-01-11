package openapisdk.models.operations;



public class FetchWirelessUsageResponse {
    public String contentType;
    public FetchWirelessUsageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchWirelessUsageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewWirelessSimUsage previewWirelessSimUsage;
    public FetchWirelessUsageResponse withPreviewWirelessSimUsage(openapisdk.models.shared.PreviewWirelessSimUsage previewWirelessSimUsage) {
        this.previewWirelessSimUsage = previewWirelessSimUsage;
        return this;
    }
}