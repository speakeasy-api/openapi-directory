package openapisdk.models.operations;



public class DigitalassetlinksAssetlinksCheckResponse {
    public openapisdk.models.shared.CheckResponse checkResponse;
    public DigitalassetlinksAssetlinksCheckResponse withCheckResponse(openapisdk.models.shared.CheckResponse checkResponse) {
        this.checkResponse = checkResponse;
        return this;
    }
    public String contentType;
    public DigitalassetlinksAssetlinksCheckResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DigitalassetlinksAssetlinksCheckResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}