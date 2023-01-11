package openapisdk.models.operations;



public class UpdateSpotResponse {
    public String contentType;
    public UpdateSpotResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ResponseDefaultResource responseDefaultResource;
    public UpdateSpotResponse withResponseDefaultResource(openapisdk.models.shared.ResponseDefaultResource responseDefaultResource) {
        this.responseDefaultResource = responseDefaultResource;
        return this;
    }
    public Long statusCode;
    public UpdateSpotResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}