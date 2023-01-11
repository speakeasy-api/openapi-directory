package openapisdk.models.operations;



public class GetUntaggedImageCountResponse {
    public byte[] body;
    public GetUntaggedImageCountResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetUntaggedImageCountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CustomVisionError customVisionError;
    public GetUntaggedImageCountResponse withCustomVisionError(openapisdk.models.shared.CustomVisionError customVisionError) {
        this.customVisionError = customVisionError;
        return this;
    }
    public Integer getUntaggedImageCount200ApplicationJSONInt32Integer;
    public GetUntaggedImageCountResponse withGetUntaggedImageCount200ApplicationJsonInt32Integer(Integer getUntaggedImageCount200ApplicationJSONInt32Integer) {
        this.getUntaggedImageCount200ApplicationJSONInt32Integer = getUntaggedImageCount200ApplicationJSONInt32Integer;
        return this;
    }
    public Long statusCode;
    public GetUntaggedImageCountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}