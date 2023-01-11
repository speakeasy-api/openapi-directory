package openapisdk.models.operations;



public class GetImagePerformanceCountResponse {
    public byte[] body;
    public GetImagePerformanceCountResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetImagePerformanceCountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CustomVisionError customVisionError;
    public GetImagePerformanceCountResponse withCustomVisionError(openapisdk.models.shared.CustomVisionError customVisionError) {
        this.customVisionError = customVisionError;
        return this;
    }
    public Integer getImagePerformanceCount200ApplicationJSONInt32Integer;
    public GetImagePerformanceCountResponse withGetImagePerformanceCount200ApplicationJsonInt32Integer(Integer getImagePerformanceCount200ApplicationJSONInt32Integer) {
        this.getImagePerformanceCount200ApplicationJSONInt32Integer = getImagePerformanceCount200ApplicationJSONInt32Integer;
        return this;
    }
    public Long statusCode;
    public GetImagePerformanceCountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}