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
    public GetMembers200ApplicationJson[] getMembers200ApplicationJSONObjects;
    public GetMembersResponse withGetMembers200ApplicationJsonObjects(GetMembers200ApplicationJson[] getMembers200ApplicationJSONObjects) {
        this.getMembers200ApplicationJSONObjects = getMembers200ApplicationJSONObjects;
        return this;
    }
}