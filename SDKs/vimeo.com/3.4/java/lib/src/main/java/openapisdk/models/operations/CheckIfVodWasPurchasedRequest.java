package openapisdk.models.operations;



public class CheckIfVodWasPurchasedRequest {
    public CheckIfVodWasPurchasedPathParams pathParams;
    public CheckIfVodWasPurchasedRequest withPathParams(CheckIfVodWasPurchasedPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CheckIfVodWasPurchasedSecurity security;
    public CheckIfVodWasPurchasedRequest withSecurity(CheckIfVodWasPurchasedSecurity security) {
        this.security = security;
        return this;
    }
}