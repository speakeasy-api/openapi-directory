package openapisdk.models.operations;



public class DownloadGlobalGlossaryResponse {
    public String contentType;
    public DownloadGlobalGlossaryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public DownloadGlobalGlossaryResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public DownloadGlobalGlossaryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String downloadGlobalGlossary200ApplicationJSONString;
    public DownloadGlobalGlossaryResponse withDownloadGlobalGlossary200ApplicationJsonString(String downloadGlobalGlossary200ApplicationJSONString) {
        this.downloadGlobalGlossary200ApplicationJSONString = downloadGlobalGlossary200ApplicationJSONString;
        return this;
    }
}