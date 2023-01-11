package openapisdk.models.operations;



public class CloudidentityInboundSamlSsoProfilesListResponse {
    public String contentType;
    public CloudidentityInboundSamlSsoProfilesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListInboundSamlSsoProfilesResponse listInboundSamlSsoProfilesResponse;
    public CloudidentityInboundSamlSsoProfilesListResponse withListInboundSamlSsoProfilesResponse(openapisdk.models.shared.ListInboundSamlSsoProfilesResponse listInboundSamlSsoProfilesResponse) {
        this.listInboundSamlSsoProfilesResponse = listInboundSamlSsoProfilesResponse;
        return this;
    }
    public Long statusCode;
    public CloudidentityInboundSamlSsoProfilesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}