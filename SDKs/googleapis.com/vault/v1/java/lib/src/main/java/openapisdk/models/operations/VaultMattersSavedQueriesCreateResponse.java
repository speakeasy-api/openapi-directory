package openapisdk.models.operations;



public class VaultMattersSavedQueriesCreateResponse {
    public String contentType;
    public VaultMattersSavedQueriesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SavedQuery savedQuery;
    public VaultMattersSavedQueriesCreateResponse withSavedQuery(openapisdk.models.shared.SavedQuery savedQuery) {
        this.savedQuery = savedQuery;
        return this;
    }
    public Long statusCode;
    public VaultMattersSavedQueriesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}