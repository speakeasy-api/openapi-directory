package openapisdk.models.operations;



public class GetPaymentInformationRequest {
    public GetPaymentInformationPathParams pathParams;
    public GetPaymentInformationRequest withPathParams(GetPaymentInformationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetPaymentInformationHeaders headers;
    public GetPaymentInformationRequest withHeaders(GetPaymentInformationHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetPaymentInformationSecurity security;
    public GetPaymentInformationRequest withSecurity(GetPaymentInformationSecurity security) {
        this.security = security;
        return this;
    }
}