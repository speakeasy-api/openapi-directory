package openapisdk.models.operations;



public class GetSetupV1LocationsIdGoogleServiceAccountResponse {
    public String contentType;
    public GetSetupV1LocationsIdGoogleServiceAccountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleServiceAccountCreds googleServiceAccountCreds;
    public GetSetupV1LocationsIdGoogleServiceAccountResponse withGoogleServiceAccountCreds(openapisdk.models.shared.GoogleServiceAccountCreds googleServiceAccountCreds) {
        this.googleServiceAccountCreds = googleServiceAccountCreds;
        return this;
    }
    public Long statusCode;
    public GetSetupV1LocationsIdGoogleServiceAccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}