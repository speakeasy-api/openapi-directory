package openapisdk.models.operations;



public class GetResourcesJsonResponse {
    public String contentType;
    public GetResourcesJsonResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] resourceWrappeds;
    public GetResourcesJsonResponse withResourceWrappeds(Object[] resourceWrappeds) {
        this.resourceWrappeds = resourceWrappeds;
        return this;
    }
    public Long statusCode;
    public GetResourcesJsonResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}