package openapisdk.models.operations;



public class ActionsCreateRegistrationTokenForRepoResponse {
    public String contentType;
    public ActionsCreateRegistrationTokenForRepoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ActionsCreateRegistrationTokenForRepoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.AuthenticationToken authenticationToken;
    public ActionsCreateRegistrationTokenForRepoResponse withAuthenticationToken(openapisdk.models.shared.AuthenticationToken authenticationToken) {
        this.authenticationToken = authenticationToken;
        return this;
    }
}