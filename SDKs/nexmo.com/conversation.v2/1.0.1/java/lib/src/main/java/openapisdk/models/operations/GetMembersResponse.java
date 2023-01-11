package openapisdk.models.operations;



public class GetMembersResponse {
    public String contentType;
    public GetMembersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetMembersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object getMembers200ApplicationJSONAny;
    public GetMembersResponse withGetMembers200ApplicationJsonAny(Object getMembers200ApplicationJSONAny) {
        this.getMembers200ApplicationJSONAny = getMembers200ApplicationJSONAny;
        return this;
    }
}