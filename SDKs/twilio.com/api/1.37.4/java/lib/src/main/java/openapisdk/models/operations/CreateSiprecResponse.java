package openapisdk.models.operations;



public class CreateSiprecResponse {
    public String contentType;
    public CreateSiprecResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateSiprecResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountCallSiprec apiV2010AccountCallSiprec;
    public CreateSiprecResponse withApiV2010AccountCallSiprec(openapisdk.models.shared.ApiV2010AccountCallSiprec apiV2010AccountCallSiprec) {
        this.apiV2010AccountCallSiprec = apiV2010AccountCallSiprec;
        return this;
    }
}