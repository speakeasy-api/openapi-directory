package openapisdk.models.operations;



public class Html5RenderResponse {
    public openapisdk.models.shared.ApiError apiError;
    public Html5RenderResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public String contentType;
    public Html5RenderResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public byte[] html5Render200ApplicationJSONBinaryString;
    public Html5RenderResponse withHtml5Render200ApplicationJsonBinaryString(byte[] html5Render200ApplicationJSONBinaryString) {
        this.html5Render200ApplicationJSONBinaryString = html5Render200ApplicationJSONBinaryString;
        return this;
    }
    public Long statusCode;
    public Html5RenderResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}