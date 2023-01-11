package openapisdk.models.operations;



public class GetPaymentDetailsV3Request {
    public GetPaymentDetailsV3PathParams pathParams;
    public GetPaymentDetailsV3Request withPathParams(GetPaymentDetailsV3PathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetPaymentDetailsV3QueryParams queryParams;
    public GetPaymentDetailsV3Request withQueryParams(GetPaymentDetailsV3QueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}