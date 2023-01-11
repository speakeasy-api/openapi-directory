package openapisdk.models.operations;



public class PlayintegrityDecodeIntegrityTokenResponse {
    public String contentType;
    public PlayintegrityDecodeIntegrityTokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DecodeIntegrityTokenResponse decodeIntegrityTokenResponse;
    public PlayintegrityDecodeIntegrityTokenResponse withDecodeIntegrityTokenResponse(openapisdk.models.shared.DecodeIntegrityTokenResponse decodeIntegrityTokenResponse) {
        this.decodeIntegrityTokenResponse = decodeIntegrityTokenResponse;
        return this;
    }
    public Long statusCode;
    public PlayintegrityDecodeIntegrityTokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}