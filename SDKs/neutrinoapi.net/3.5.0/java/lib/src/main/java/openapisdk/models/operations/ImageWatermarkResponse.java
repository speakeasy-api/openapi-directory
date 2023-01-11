package openapisdk.models.operations;



public class ImageWatermarkResponse {
    public openapisdk.models.shared.ApiError apiError;
    public ImageWatermarkResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public String contentType;
    public ImageWatermarkResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public byte[] imageWatermark200ApplicationJSONBinaryString;
    public ImageWatermarkResponse withImageWatermark200ApplicationJsonBinaryString(byte[] imageWatermark200ApplicationJSONBinaryString) {
        this.imageWatermark200ApplicationJSONBinaryString = imageWatermark200ApplicationJSONBinaryString;
        return this;
    }
    public Long statusCode;
    public ImageWatermarkResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}