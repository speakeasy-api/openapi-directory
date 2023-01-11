package openapisdk.models.operations;



public class GetTaggedImageCountResponse {
    public byte[] body;
    public GetTaggedImageCountResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetTaggedImageCountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CustomVisionError customVisionError;
    public GetTaggedImageCountResponse withCustomVisionError(openapisdk.models.shared.CustomVisionError customVisionError) {
        this.customVisionError = customVisionError;
        return this;
    }
    public Integer getTaggedImageCount200ApplicationJSONInt32Integer;
    public GetTaggedImageCountResponse withGetTaggedImageCount200ApplicationJsonInt32Integer(Integer getTaggedImageCount200ApplicationJSONInt32Integer) {
        this.getTaggedImageCount200ApplicationJSONInt32Integer = getTaggedImageCount200ApplicationJSONInt32Integer;
        return this;
    }
    public Long statusCode;
    public GetTaggedImageCountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}