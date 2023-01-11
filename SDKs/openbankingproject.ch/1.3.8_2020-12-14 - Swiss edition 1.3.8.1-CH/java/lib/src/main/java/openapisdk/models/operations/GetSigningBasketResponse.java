package openapisdk.models.operations;



public class GetSigningBasketResponse {
    public String contentType;
    public GetSigningBasketResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error400NgSbs error400NGSBS;
    public GetSigningBasketResponse withError400NgSbs(openapisdk.models.shared.Error400NgSbs error400NGSBS) {
        this.error400NGSBS = error400NGSBS;
        return this;
    }
    public openapisdk.models.shared.Error400Sbs error400SBS;
    public GetSigningBasketResponse withError400Sbs(openapisdk.models.shared.Error400Sbs error400SBS) {
        this.error400SBS = error400SBS;
        return this;
    }
    public openapisdk.models.shared.Error401NgSbs error401NGSBS;
    public GetSigningBasketResponse withError401NgSbs(openapisdk.models.shared.Error401NgSbs error401NGSBS) {
        this.error401NGSBS = error401NGSBS;
        return this;
    }
    public openapisdk.models.shared.Error401Sbs error401SBS;
    public GetSigningBasketResponse withError401Sbs(openapisdk.models.shared.Error401Sbs error401SBS) {
        this.error401SBS = error401SBS;
        return this;
    }
    public openapisdk.models.shared.Error403NgSbs error403NGSBS;
    public GetSigningBasketResponse withError403NgSbs(openapisdk.models.shared.Error403NgSbs error403NGSBS) {
        this.error403NGSBS = error403NGSBS;
        return this;
    }
    public openapisdk.models.shared.Error403Sbs error403SBS;
    public GetSigningBasketResponse withError403Sbs(openapisdk.models.shared.Error403Sbs error403SBS) {
        this.error403SBS = error403SBS;
        return this;
    }
    public openapisdk.models.shared.Error404NgSbs error404NGSBS;
    public GetSigningBasketResponse withError404NgSbs(openapisdk.models.shared.Error404NgSbs error404NGSBS) {
        this.error404NGSBS = error404NGSBS;
        return this;
    }
    public openapisdk.models.shared.Error404Sbs error404SBS;
    public GetSigningBasketResponse withError404Sbs(openapisdk.models.shared.Error404Sbs error404SBS) {
        this.error404SBS = error404SBS;
        return this;
    }
    public openapisdk.models.shared.Error405NgSbs error405NGSBS;
    public GetSigningBasketResponse withError405NgSbs(openapisdk.models.shared.Error405NgSbs error405NGSBS) {
        this.error405NGSBS = error405NGSBS;
        return this;
    }
    public openapisdk.models.shared.Error405Sbs error405SBS;
    public GetSigningBasketResponse withError405Sbs(openapisdk.models.shared.Error405Sbs error405SBS) {
        this.error405SBS = error405SBS;
        return this;
    }
    public openapisdk.models.shared.Error409NgSbs error409NGSBS;
    public GetSigningBasketResponse withError409NgSbs(openapisdk.models.shared.Error409NgSbs error409NGSBS) {
        this.error409NGSBS = error409NGSBS;
        return this;
    }
    public openapisdk.models.shared.Error409Sbs error409SBS;
    public GetSigningBasketResponse withError409Sbs(openapisdk.models.shared.Error409Sbs error409SBS) {
        this.error409SBS = error409SBS;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetSigningBasketResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetSigningBasketResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SigningBasketResponse200 signingBasketResponse200;
    public GetSigningBasketResponse withSigningBasketResponse200(openapisdk.models.shared.SigningBasketResponse200 signingBasketResponse200) {
        this.signingBasketResponse200 = signingBasketResponse200;
        return this;
    }
}