package openapisdk.models.operations;



public class DownloadGlobalStyleGuideResponse {
    public String contentType;
    public DownloadGlobalStyleGuideResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public DownloadGlobalStyleGuideResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public DownloadGlobalStyleGuideResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String downloadGlobalStyleGuide200ApplicationJSONString;
    public DownloadGlobalStyleGuideResponse withDownloadGlobalStyleGuide200ApplicationJsonString(String downloadGlobalStyleGuide200ApplicationJSONString) {
        this.downloadGlobalStyleGuide200ApplicationJSONString = downloadGlobalStyleGuide200ApplicationJSONString;
        return this;
    }
}