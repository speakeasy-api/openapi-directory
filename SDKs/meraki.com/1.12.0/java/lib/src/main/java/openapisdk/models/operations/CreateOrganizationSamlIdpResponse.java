package openapisdk.models.operations;



public class CreateOrganizationSamlIdpResponse {
    public String contentType;
    public CreateOrganizationSamlIdpResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateOrganizationSamlIdpResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> createOrganizationSamlIdp201ApplicationJSONObject;
    public CreateOrganizationSamlIdpResponse withCreateOrganizationSamlIdp201ApplicationJsonObject(java.util.Map<String, Object> createOrganizationSamlIdp201ApplicationJSONObject) {
        this.createOrganizationSamlIdp201ApplicationJSONObject = createOrganizationSamlIdp201ApplicationJSONObject;
        return this;
    }
}