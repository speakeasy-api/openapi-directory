package openapisdk.models.operations;



public class OriginResponse {
    public String contentType;
    public OriginResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FirstLastNameOriginedOut firstLastNameOriginedOut;
    public OriginResponse withFirstLastNameOriginedOut(openapisdk.models.shared.FirstLastNameOriginedOut firstLastNameOriginedOut) {
        this.firstLastNameOriginedOut = firstLastNameOriginedOut;
        return this;
    }
    public Long statusCode;
    public OriginResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}