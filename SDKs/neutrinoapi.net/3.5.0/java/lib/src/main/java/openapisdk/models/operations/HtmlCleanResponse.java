package openapisdk.models.operations;



public class HtmlCleanResponse {
    public openapisdk.models.shared.ApiError apiError;
    public HtmlCleanResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public String contentType;
    public HtmlCleanResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public byte[] htmlClean200ApplicationJSONBinaryString;
    public HtmlCleanResponse withHtmlClean200ApplicationJsonBinaryString(byte[] htmlClean200ApplicationJSONBinaryString) {
        this.htmlClean200ApplicationJSONBinaryString = htmlClean200ApplicationJSONBinaryString;
        return this;
    }
    public Long statusCode;
    public HtmlCleanResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}