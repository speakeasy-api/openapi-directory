package openapisdk.models.operations;



public class GetPaymentDetailsV4Request {
    public GetPaymentDetailsV4PathParams pathParams;
    public GetPaymentDetailsV4Request withPathParams(GetPaymentDetailsV4PathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetPaymentDetailsV4QueryParams queryParams;
    public GetPaymentDetailsV4Request withQueryParams(GetPaymentDetailsV4QueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}