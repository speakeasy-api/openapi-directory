package openapisdk.models.operations;



public class GetPaymentsForPayoutV3Request {
    public GetPaymentsForPayoutV3PathParams pathParams;
    public GetPaymentsForPayoutV3Request withPathParams(GetPaymentsForPayoutV3PathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetPaymentsForPayoutV3QueryParams queryParams;
    public GetPaymentsForPayoutV3Request withQueryParams(GetPaymentsForPayoutV3QueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}