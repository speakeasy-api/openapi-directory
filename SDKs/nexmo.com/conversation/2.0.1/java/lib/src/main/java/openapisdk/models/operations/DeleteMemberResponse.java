package openapisdk.models.operations;



public class DeleteMemberResponse {
    public String contentType;
    public DeleteMemberResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeleteMemberResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> deleteMember200ApplicationJSONObject;
    public DeleteMemberResponse withDeleteMember200ApplicationJsonObject(java.util.Map<String, Object> deleteMember200ApplicationJSONObject) {
        this.deleteMember200ApplicationJSONObject = deleteMember200ApplicationJSONObject;
        return this;
    }
}