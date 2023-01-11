package openapisdk.models.operations;



public class DfareportingInventoryItemsGetRequest {
    public DfareportingInventoryItemsGetPathParams pathParams;
    public DfareportingInventoryItemsGetRequest withPathParams(DfareportingInventoryItemsGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingInventoryItemsGetQueryParams queryParams;
    public DfareportingInventoryItemsGetRequest withQueryParams(DfareportingInventoryItemsGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DfareportingInventoryItemsGetSecurity security;
    public DfareportingInventoryItemsGetRequest withSecurity(DfareportingInventoryItemsGetSecurity security) {
        this.security = security;
        return this;
    }
}