package openapisdk.models.operations;



public class GetAgentContactsResponse {
    public String contentType;
    public GetAgentContactsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PaginatedAgentContactResults paginatedAgentContactResults;
    public GetAgentContactsResponse withPaginatedAgentContactResults(openapisdk.models.shared.PaginatedAgentContactResults paginatedAgentContactResults) {
        this.paginatedAgentContactResults = paginatedAgentContactResults;
        return this;
    }
    public Long statusCode;
    public GetAgentContactsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}