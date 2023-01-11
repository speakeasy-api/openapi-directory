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
    public Integer getTaggedImageCount200ApplicationJSONInt32Integer;
    public GetTaggedImageCountResponse withGetTaggedImageCount200ApplicationJsonInt32Integer(Integer getTaggedImageCount200ApplicationJSONInt32Integer) {
        this.getTaggedImageCount200ApplicationJSONInt32Integer = getTaggedImageCount200ApplicationJSONInt32Integer;
        return this;
    }
    public Integer getTaggedImageCount200TextJSONInt32Integer;
    public GetTaggedImageCountResponse withGetTaggedImageCount200TextJsonInt32Integer(Integer getTaggedImageCount200TextJSONInt32Integer) {
        this.getTaggedImageCount200TextJSONInt32Integer = getTaggedImageCount200TextJSONInt32Integer;
        return this;
    }
    public Long statusCode;
    public GetTaggedImageCountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}