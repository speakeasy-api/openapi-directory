package openapisdk.models.operations;



public class GetSparqlQueryResponse {
    public openapisdk.models.shared.Association[] associations;
    public GetSparqlQueryResponse withAssociations(openapisdk.models.shared.Association[] associations) {
        this.associations = associations;
        return this;
    }
    public String contentType;
    public GetSparqlQueryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSparqlQueryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}