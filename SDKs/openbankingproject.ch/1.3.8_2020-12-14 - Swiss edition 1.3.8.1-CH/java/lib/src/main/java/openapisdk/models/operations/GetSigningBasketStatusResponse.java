package openapisdk.models.operations;



public class GetSigningBasketStatusResponse {
    public String contentType;
    public GetSigningBasketStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error400NgSbs error400NGSBS;
    public GetSigningBasketStatusResponse withError400NgSbs(openapisdk.models.shared.Error400NgSbs error400NGSBS) {
        this.error400NGSBS = error400NGSBS;
        return this;
    }
    public openapisdk.models.shared.Error400Sbs error400SBS;
    public GetSigningBasketStatusResponse withError400Sbs(openapisdk.models.shared.Error400Sbs error400SBS) {
        this.error400SBS = error400SBS;
        return this;
    }
    public openapisdk.models.shared.Error401NgSbs error401NGSBS;
    public GetSigningBasketStatusResponse withError401NgSbs(openapisdk.models.shared.Error401NgSbs error401NGSBS) {
        this.error401NGSBS = error401NGSBS;
        return this;
    }
    public openapisdk.models.shared.Error401Sbs error401SBS;
    public GetSigningBasketStatusResponse withError401Sbs(openapisdk.models.shared.Error401Sbs error401SBS) {
        this.error401SBS = error401SBS;
        return this;
    }
    public openapisdk.models.shared.Error403NgSbs error403NGSBS;
    public GetSigningBasketStatusResponse withError403NgSbs(openapisdk.models.shared.Error403NgSbs error403NGSBS) {
        this.error403NGSBS = error403NGSBS;
        return this;
    }
    public openapisdk.models.shared.Error403Sbs error403SBS;
    public GetSigningBasketStatusResponse withError403Sbs(openapisdk.models.shared.Error403Sbs error403SBS) {
        this.error403SBS = error403SBS;
        return this;
    }
    public openapisdk.models.shared.Error404NgSbs error404NGSBS;
    public GetSigningBasketStatusResponse withError404NgSbs(openapisdk.models.shared.Error404NgSbs error404NGSBS) {
        this.error404NGSBS = error404NGSBS;
        return this;
    }
    public openapisdk.models.shared.Error404Sbs error404SBS;
    public GetSigningBasketStatusResponse withError404Sbs(openapisdk.models.shared.Error404Sbs error404SBS) {
        this.error404SBS = error404SBS;
        return this;
    }
    public openapisdk.models.shared.Error405NgSbs error405NGSBS;
    public GetSigningBasketStatusResponse withError405NgSbs(openapisdk.models.shared.Error405NgSbs error405NGSBS) {
        this.error405NGSBS = error405NGSBS;
        return this;
    }
    public openapisdk.models.shared.Error405Sbs error405SBS;
    public GetSigningBasketStatusResponse withError405Sbs(openapisdk.models.shared.Error405Sbs error405SBS) {
        this.error405SBS = error405SBS;
        return this;
    }
    public openapisdk.models.shared.Error409NgSbs error409NGSBS;
    public GetSigningBasketStatusResponse withError409NgSbs(openapisdk.models.shared.Error409NgSbs error409NGSBS) {
        this.error409NGSBS = error409NGSBS;
        return this;
    }
    public openapisdk.models.shared.Error409Sbs error409SBS;
    public GetSigningBasketStatusResponse withError409Sbs(openapisdk.models.shared.Error409Sbs error409SBS) {
        this.error409SBS = error409SBS;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetSigningBasketStatusResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetSigningBasketStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SigningBasketStatusResponse200 signingBasketStatusResponse200;
    public GetSigningBasketStatusResponse withSigningBasketStatusResponse200(openapisdk.models.shared.SigningBasketStatusResponse200 signingBasketStatusResponse200) {
        this.signingBasketStatusResponse200 = signingBasketStatusResponse200;
        return this;
    }
}