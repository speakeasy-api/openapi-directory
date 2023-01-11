package openapisdk.models.operations;



public class VaultMattersSavedQueriesGetResponse {
    public String contentType;
    public VaultMattersSavedQueriesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SavedQuery savedQuery;
    public VaultMattersSavedQueriesGetResponse withSavedQuery(openapisdk.models.shared.SavedQuery savedQuery) {
        this.savedQuery = savedQuery;
        return this;
    }
    public Long statusCode;
    public VaultMattersSavedQueriesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}