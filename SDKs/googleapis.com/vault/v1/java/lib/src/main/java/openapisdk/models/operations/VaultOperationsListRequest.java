package openapisdk.models.operations;



public class VaultOperationsListRequest {
    public VaultOperationsListPathParams pathParams;
    public VaultOperationsListRequest withPathParams(VaultOperationsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public VaultOperationsListQueryParams queryParams;
    public VaultOperationsListRequest withQueryParams(VaultOperationsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}