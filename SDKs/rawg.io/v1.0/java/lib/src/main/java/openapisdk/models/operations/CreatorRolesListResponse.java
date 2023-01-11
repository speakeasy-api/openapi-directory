package openapisdk.models.operations;



public class CreatorRolesListResponse {
    public String contentType;
    public CreatorRolesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreatorRolesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public CreatorRolesList200ApplicationJson creatorRolesList200ApplicationJSONObject;
    public CreatorRolesListResponse withCreatorRolesList200ApplicationJsonObject(CreatorRolesList200ApplicationJson creatorRolesList200ApplicationJSONObject) {
        this.creatorRolesList200ApplicationJSONObject = creatorRolesList200ApplicationJSONObject;
        return this;
    }
}