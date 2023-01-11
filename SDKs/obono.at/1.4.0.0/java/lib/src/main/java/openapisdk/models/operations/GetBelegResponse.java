package openapisdk.models.operations;



public class GetBelegResponse {
    public openapisdk.models.shared.Beleg beleg;
    public GetBelegResponse withBeleg(openapisdk.models.shared.Beleg beleg) {
        this.beleg = beleg;
        return this;
    }
    public String contentType;
    public GetBelegResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetBelegResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}