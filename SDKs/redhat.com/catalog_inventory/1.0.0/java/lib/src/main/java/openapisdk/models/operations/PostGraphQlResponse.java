package openapisdk.models.operations;



public class PostGraphQlResponse {
    public String contentType;
    public PostGraphQlResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GraphQlResponse graphQLResponse;
    public PostGraphQlResponse withGraphQlResponse(openapisdk.models.shared.GraphQlResponse graphQLResponse) {
        this.graphQLResponse = graphQLResponse;
        return this;
    }
    public Long statusCode;
    public PostGraphQlResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}