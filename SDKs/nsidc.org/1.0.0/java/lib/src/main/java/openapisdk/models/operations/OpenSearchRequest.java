package openapisdk.models.operations;



public class OpenSearchRequest {
    public OpenSearchQueryParams queryParams;
    public OpenSearchRequest withQueryParams(OpenSearchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}