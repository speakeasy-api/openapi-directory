package openapisdk.models.operations;



public class DfareportingOrderDocumentsListRequest {
    public DfareportingOrderDocumentsListPathParams pathParams;
    public DfareportingOrderDocumentsListRequest withPathParams(DfareportingOrderDocumentsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingOrderDocumentsListQueryParams queryParams;
    public DfareportingOrderDocumentsListRequest withQueryParams(DfareportingOrderDocumentsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DfareportingOrderDocumentsListSecurity security;
    public DfareportingOrderDocumentsListRequest withSecurity(DfareportingOrderDocumentsListSecurity security) {
        this.security = security;
        return this;
    }
}