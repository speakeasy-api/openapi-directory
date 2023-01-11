package openapisdk.models.operations;



public class GetPaymentsForPayoutV4Request {
    public GetPaymentsForPayoutV4PathParams pathParams;
    public GetPaymentsForPayoutV4Request withPathParams(GetPaymentsForPayoutV4PathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetPaymentsForPayoutV4QueryParams queryParams;
    public GetPaymentsForPayoutV4Request withQueryParams(GetPaymentsForPayoutV4QueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}