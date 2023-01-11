package openapisdk.models.operations;



public class GamesApplicationsGetResponse {
    public openapisdk.models.shared.Application application;
    public GamesApplicationsGetResponse withApplication(openapisdk.models.shared.Application application) {
        this.application = application;
        return this;
    }
    public String contentType;
    public GamesApplicationsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GamesApplicationsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}