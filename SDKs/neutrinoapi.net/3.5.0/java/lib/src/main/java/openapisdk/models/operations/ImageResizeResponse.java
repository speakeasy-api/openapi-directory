package openapisdk.models.operations;



public class ImageResizeResponse {
    public openapisdk.models.shared.ApiError apiError;
    public ImageResizeResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public String contentType;
    public ImageResizeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public byte[] imageResize200ApplicationJSONBinaryString;
    public ImageResizeResponse withImageResize200ApplicationJsonBinaryString(byte[] imageResize200ApplicationJSONBinaryString) {
        this.imageResize200ApplicationJSONBinaryString = imageResize200ApplicationJSONBinaryString;
        return this;
    }
    public Long statusCode;
    public ImageResizeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}