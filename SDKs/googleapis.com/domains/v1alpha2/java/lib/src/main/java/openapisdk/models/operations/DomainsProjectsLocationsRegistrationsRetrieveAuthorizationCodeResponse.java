package openapisdk.models.operations;



public class DomainsProjectsLocationsRegistrationsRetrieveAuthorizationCodeResponse {
    public openapisdk.models.shared.AuthorizationCode authorizationCode;
    public DomainsProjectsLocationsRegistrationsRetrieveAuthorizationCodeResponse withAuthorizationCode(openapisdk.models.shared.AuthorizationCode authorizationCode) {
        this.authorizationCode = authorizationCode;
        return this;
    }
    public String contentType;
    public DomainsProjectsLocationsRegistrationsRetrieveAuthorizationCodeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DomainsProjectsLocationsRegistrationsRetrieveAuthorizationCodeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}