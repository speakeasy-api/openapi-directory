package openapisdk.models.operations;



public class PeoplePeopleConnectionsListResponse {
    public String contentType;
    public PeoplePeopleConnectionsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListConnectionsResponse listConnectionsResponse;
    public PeoplePeopleConnectionsListResponse withListConnectionsResponse(openapisdk.models.shared.ListConnectionsResponse listConnectionsResponse) {
        this.listConnectionsResponse = listConnectionsResponse;
        return this;
    }
    public Long statusCode;
    public PeoplePeopleConnectionsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}