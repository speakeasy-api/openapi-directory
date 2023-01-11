package openapisdk.models.operations;



public class GetVodPurchasesRequest {
    public GetVodPurchasesQueryParams queryParams;
    public GetVodPurchasesRequest withQueryParams(GetVodPurchasesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetVodPurchasesSecurity security;
    public GetVodPurchasesRequest withSecurity(GetVodPurchasesSecurity security) {
        this.security = security;
        return this;
    }
}