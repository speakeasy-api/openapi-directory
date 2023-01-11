package openapisdk.models.operations;



public class GetMemberResponse {
    public String contentType;
    public GetMemberResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetMemberResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object getMember200ApplicationJSONAny;
    public GetMemberResponse withGetMember200ApplicationJsonAny(Object getMember200ApplicationJSONAny) {
        this.getMember200ApplicationJSONAny = getMember200ApplicationJSONAny;
        return this;
    }
}