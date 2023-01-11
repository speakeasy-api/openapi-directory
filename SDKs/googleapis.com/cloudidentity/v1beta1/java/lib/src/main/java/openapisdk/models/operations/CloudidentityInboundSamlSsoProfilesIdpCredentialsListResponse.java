package openapisdk.models.operations;



public class CloudidentityInboundSamlSsoProfilesIdpCredentialsListResponse {
    public String contentType;
    public CloudidentityInboundSamlSsoProfilesIdpCredentialsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListIdpCredentialsResponse listIdpCredentialsResponse;
    public CloudidentityInboundSamlSsoProfilesIdpCredentialsListResponse withListIdpCredentialsResponse(openapisdk.models.shared.ListIdpCredentialsResponse listIdpCredentialsResponse) {
        this.listIdpCredentialsResponse = listIdpCredentialsResponse;
        return this;
    }
    public Long statusCode;
    public CloudidentityInboundSamlSsoProfilesIdpCredentialsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}