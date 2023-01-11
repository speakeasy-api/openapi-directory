package openapisdk.models.operations;



public class GetQuoteListRequest {
    public GetQuoteListQueryParams queryParams;
    public GetQuoteListRequest withQueryParams(GetQuoteListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetQuoteListSecurity security;
    public GetQuoteListRequest withSecurity(GetQuoteListSecurity security) {
        this.security = security;
        return this;
    }
}