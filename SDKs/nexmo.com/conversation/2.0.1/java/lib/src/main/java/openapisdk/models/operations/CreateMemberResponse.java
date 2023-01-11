package openapisdk.models.operations;



public class CreateMemberResponse {
    public String contentType;
    public CreateMemberResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateMemberResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public CreateMember201ApplicationJson createMember201ApplicationJSONObject;
    public CreateMemberResponse withCreateMember201ApplicationJsonObject(CreateMember201ApplicationJson createMember201ApplicationJSONObject) {
        this.createMember201ApplicationJSONObject = createMember201ApplicationJSONObject;
        return this;
    }
}