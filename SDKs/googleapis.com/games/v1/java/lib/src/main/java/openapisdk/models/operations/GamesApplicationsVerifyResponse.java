package openapisdk.models.operations;



public class GamesApplicationsVerifyResponse {
    public openapisdk.models.shared.ApplicationVerifyResponse applicationVerifyResponse;
    public GamesApplicationsVerifyResponse withApplicationVerifyResponse(openapisdk.models.shared.ApplicationVerifyResponse applicationVerifyResponse) {
        this.applicationVerifyResponse = applicationVerifyResponse;
        return this;
    }
    public String contentType;
    public GamesApplicationsVerifyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GamesApplicationsVerifyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}