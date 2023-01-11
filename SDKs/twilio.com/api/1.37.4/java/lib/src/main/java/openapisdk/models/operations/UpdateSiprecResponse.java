package openapisdk.models.operations;



public class UpdateSiprecResponse {
    public String contentType;
    public UpdateSiprecResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateSiprecResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountCallSiprec apiV2010AccountCallSiprec;
    public UpdateSiprecResponse withApiV2010AccountCallSiprec(openapisdk.models.shared.ApiV2010AccountCallSiprec apiV2010AccountCallSiprec) {
        this.apiV2010AccountCallSiprec = apiV2010AccountCallSiprec;
        return this;
    }
}