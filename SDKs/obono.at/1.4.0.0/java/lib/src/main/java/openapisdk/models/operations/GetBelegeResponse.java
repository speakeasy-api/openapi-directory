package openapisdk.models.operations;



public class GetBelegeResponse {
    public openapisdk.models.shared.Belege belege;
    public GetBelegeResponse withBelege(openapisdk.models.shared.Belege belege) {
        this.belege = belege;
        return this;
    }
    public String contentType;
    public GetBelegeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetBelegeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}