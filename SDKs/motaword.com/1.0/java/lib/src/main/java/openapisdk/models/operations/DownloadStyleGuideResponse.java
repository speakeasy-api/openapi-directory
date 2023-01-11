package openapisdk.models.operations;



public class DownloadStyleGuideResponse {
    public String contentType;
    public DownloadStyleGuideResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public DownloadStyleGuideResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public DownloadStyleGuideResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String downloadStyleGuide200ApplicationJSONString;
    public DownloadStyleGuideResponse withDownloadStyleGuide200ApplicationJsonString(String downloadStyleGuide200ApplicationJSONString) {
        this.downloadStyleGuide200ApplicationJSONString = downloadStyleGuide200ApplicationJSONString;
        return this;
    }
}