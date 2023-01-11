package openapisdk.models.operations;



public class DfareportingInventoryItemsListRequest {
    public DfareportingInventoryItemsListPathParams pathParams;
    public DfareportingInventoryItemsListRequest withPathParams(DfareportingInventoryItemsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingInventoryItemsListQueryParams queryParams;
    public DfareportingInventoryItemsListRequest withQueryParams(DfareportingInventoryItemsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DfareportingInventoryItemsListSecurity security;
    public DfareportingInventoryItemsListRequest withSecurity(DfareportingInventoryItemsListSecurity security) {
        this.security = security;
        return this;
    }
}