package openapisdk.models.operations;



public class VaultMattersSavedQueriesListResponse {
    public String contentType;
    public VaultMattersSavedQueriesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListSavedQueriesResponse listSavedQueriesResponse;
    public VaultMattersSavedQueriesListResponse withListSavedQueriesResponse(openapisdk.models.shared.ListSavedQueriesResponse listSavedQueriesResponse) {
        this.listSavedQueriesResponse = listSavedQueriesResponse;
        return this;
    }
    public Long statusCode;
    public VaultMattersSavedQueriesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}