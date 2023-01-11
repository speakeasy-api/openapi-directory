package openapisdk.models.operations;



public class GetBelegeBelegUuidResponse {
    public openapisdk.models.shared.Beleg beleg;
    public GetBelegeBelegUuidResponse withBeleg(openapisdk.models.shared.Beleg beleg) {
        this.beleg = beleg;
        return this;
    }
    public String contentType;
    public GetBelegeBelegUuidResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetBelegeBelegUuidResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}