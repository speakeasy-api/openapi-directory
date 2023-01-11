package openapisdk.models.operations;



public class DfareportingVideoFormatsListRequest {
    public DfareportingVideoFormatsListPathParams pathParams;
    public DfareportingVideoFormatsListRequest withPathParams(DfareportingVideoFormatsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingVideoFormatsListQueryParams queryParams;
    public DfareportingVideoFormatsListRequest withQueryParams(DfareportingVideoFormatsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DfareportingVideoFormatsListSecurity security;
    public DfareportingVideoFormatsListRequest withSecurity(DfareportingVideoFormatsListSecurity security) {
        this.security = security;
        return this;
    }
}