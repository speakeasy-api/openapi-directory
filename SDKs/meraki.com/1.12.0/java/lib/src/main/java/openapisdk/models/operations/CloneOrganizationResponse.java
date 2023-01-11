package openapisdk.models.operations;



public class CloneOrganizationResponse {
    public String contentType;
    public CloneOrganizationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CloneOrganizationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> cloneOrganization201ApplicationJSONObject;
    public CloneOrganizationResponse withCloneOrganization201ApplicationJsonObject(java.util.Map<String, Object> cloneOrganization201ApplicationJSONObject) {
        this.cloneOrganization201ApplicationJSONObject = cloneOrganization201ApplicationJSONObject;
        return this;
    }
}