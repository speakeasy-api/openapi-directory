package openapisdk.models.operations;



public class GetListsBestSellersHistoryJsonRequest {
    public GetListsBestSellersHistoryJsonQueryParams queryParams;
    public GetListsBestSellersHistoryJsonRequest withQueryParams(GetListsBestSellersHistoryJsonQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetListsBestSellersHistoryJsonSecurity security;
    public GetListsBestSellersHistoryJsonRequest withSecurity(GetListsBestSellersHistoryJsonSecurity security) {
        this.security = security;
        return this;
    }
}