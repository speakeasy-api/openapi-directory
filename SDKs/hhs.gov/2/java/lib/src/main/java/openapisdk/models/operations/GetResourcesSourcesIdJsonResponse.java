package openapisdk.models.operations;



public class GetResourcesSourcesIdJsonResponse {
    public String contentType;
    public GetResourcesSourcesIdJsonResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SourceWrapped[] sourceWrappeds;
    public GetResourcesSourcesIdJsonResponse withSourceWrappeds(openapisdk.models.shared.SourceWrapped[] sourceWrappeds) {
        this.sourceWrappeds = sourceWrappeds;
        return this;
    }
    public Long statusCode;
    public GetResourcesSourcesIdJsonResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}