package openapisdk.models.operations;



public class PostSetupV1LocationsIdGoogleServiceAccountResponse {
    public String contentType;
    public PostSetupV1LocationsIdGoogleServiceAccountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleServiceAccountCreds googleServiceAccountCreds;
    public PostSetupV1LocationsIdGoogleServiceAccountResponse withGoogleServiceAccountCreds(openapisdk.models.shared.GoogleServiceAccountCreds googleServiceAccountCreds) {
        this.googleServiceAccountCreds = googleServiceAccountCreds;
        return this;
    }
    public Long statusCode;
    public PostSetupV1LocationsIdGoogleServiceAccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}