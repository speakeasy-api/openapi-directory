package openapisdk.models.operations;



public class DomainsProjectsLocationsRegistrationsResetAuthorizationCodeResponse {
    public openapisdk.models.shared.AuthorizationCode authorizationCode;
    public DomainsProjectsLocationsRegistrationsResetAuthorizationCodeResponse withAuthorizationCode(openapisdk.models.shared.AuthorizationCode authorizationCode) {
        this.authorizationCode = authorizationCode;
        return this;
    }
    public String contentType;
    public DomainsProjectsLocationsRegistrationsResetAuthorizationCodeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DomainsProjectsLocationsRegistrationsResetAuthorizationCodeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}