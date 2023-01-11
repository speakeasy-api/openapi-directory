package openapisdk.models.operations;



public class DownloadGlossaryResponse {
    public String contentType;
    public DownloadGlossaryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public DownloadGlossaryResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public DownloadGlossaryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String downloadGlossary200ApplicationJSONString;
    public DownloadGlossaryResponse withDownloadGlossary200ApplicationJsonString(String downloadGlossary200ApplicationJSONString) {
        this.downloadGlossary200ApplicationJSONString = downloadGlossary200ApplicationJSONString;
        return this;
    }
}