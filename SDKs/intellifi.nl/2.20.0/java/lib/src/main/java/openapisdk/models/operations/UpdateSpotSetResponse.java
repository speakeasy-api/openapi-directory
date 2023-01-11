package openapisdk.models.operations;



public class UpdateSpotSetResponse {
    public String contentType;
    public UpdateSpotSetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ResponseDefaultResource responseDefaultResource;
    public UpdateSpotSetResponse withResponseDefaultResource(openapisdk.models.shared.ResponseDefaultResource responseDefaultResource) {
        this.responseDefaultResource = responseDefaultResource;
        return this;
    }
    public Long statusCode;
    public UpdateSpotSetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}