package openapisdk.models.operations;



public class KgsearchEntitiesSearchResponse {
    public String contentType;
    public KgsearchEntitiesSearchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SearchResponse searchResponse;
    public KgsearchEntitiesSearchResponse withSearchResponse(openapisdk.models.shared.SearchResponse searchResponse) {
        this.searchResponse = searchResponse;
        return this;
    }
    public Long statusCode;
    public KgsearchEntitiesSearchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}