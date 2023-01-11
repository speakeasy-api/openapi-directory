package openapisdk.models.operations;



public class GetMonatsbelegeResponse {
    public String contentType;
    public GetMonatsbelegeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Monatsbeleg[] monatsbelegs;
    public GetMonatsbelegeResponse withMonatsbelegs(openapisdk.models.shared.Monatsbeleg[] monatsbelegs) {
        this.monatsbelegs = monatsbelegs;
        return this;
    }
    public Long statusCode;
    public GetMonatsbelegeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}