package openapisdk.models.operations;



public class FirebasedynamiclinksInstallAttributionResponse {
    public String contentType;
    public FirebasedynamiclinksInstallAttributionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetIosPostInstallAttributionResponse getIosPostInstallAttributionResponse;
    public FirebasedynamiclinksInstallAttributionResponse withGetIosPostInstallAttributionResponse(openapisdk.models.shared.GetIosPostInstallAttributionResponse getIosPostInstallAttributionResponse) {
        this.getIosPostInstallAttributionResponse = getIosPostInstallAttributionResponse;
        return this;
    }
    public Long statusCode;
    public FirebasedynamiclinksInstallAttributionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}