package openapisdk.models.operations;



public class AddSpotSetResponse {
    public String contentType;
    public AddSpotSetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ResponseDefaultResource responseDefaultResource;
    public AddSpotSetResponse withResponseDefaultResource(openapisdk.models.shared.ResponseDefaultResource responseDefaultResource) {
        this.responseDefaultResource = responseDefaultResource;
        return this;
    }
    public Long statusCode;
    public AddSpotSetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}