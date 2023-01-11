package openapisdk.models.operations;



public class GetSearchHpoEntitiesResponse {
    public String contentType;
    public GetSearchHpoEntitiesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LayResults layResults;
    public GetSearchHpoEntitiesResponse withLayResults(openapisdk.models.shared.LayResults layResults) {
        this.layResults = layResults;
        return this;
    }
    public Long statusCode;
    public GetSearchHpoEntitiesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}