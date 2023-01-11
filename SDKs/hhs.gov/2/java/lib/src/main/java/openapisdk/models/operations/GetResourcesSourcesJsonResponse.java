package openapisdk.models.operations;



public class GetResourcesSourcesJsonResponse {
    public String contentType;
    public GetResourcesSourcesJsonResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SourceWrapped[] sourceWrappeds;
    public GetResourcesSourcesJsonResponse withSourceWrappeds(openapisdk.models.shared.SourceWrapped[] sourceWrappeds) {
        this.sourceWrappeds = sourceWrappeds;
        return this;
    }
    public Long statusCode;
    public GetResourcesSourcesJsonResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}