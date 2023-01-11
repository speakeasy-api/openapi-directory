package openapisdk.models.operations;



public class CreateOrganizationResponse {
    public String contentType;
    public CreateOrganizationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateOrganizationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> createOrganization201ApplicationJSONObject;
    public CreateOrganizationResponse withCreateOrganization201ApplicationJsonObject(java.util.Map<String, Object> createOrganization201ApplicationJSONObject) {
        this.createOrganization201ApplicationJSONObject = createOrganization201ApplicationJSONObject;
        return this;
    }
}