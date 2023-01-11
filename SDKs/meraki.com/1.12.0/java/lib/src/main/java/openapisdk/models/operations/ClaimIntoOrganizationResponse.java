package openapisdk.models.operations;



public class ClaimIntoOrganizationResponse {
    public String contentType;
    public ClaimIntoOrganizationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ClaimIntoOrganizationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> claimIntoOrganization200ApplicationJSONObject;
    public ClaimIntoOrganizationResponse withClaimIntoOrganization200ApplicationJsonObject(java.util.Map<String, Object> claimIntoOrganization200ApplicationJSONObject) {
        this.claimIntoOrganization200ApplicationJSONObject = claimIntoOrganization200ApplicationJSONObject;
        return this;
    }
}