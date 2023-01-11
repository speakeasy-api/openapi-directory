package openapisdk.models.operations;



public class AndroidpublisherEditsBundlesListResponse {
    public openapisdk.models.shared.BundlesListResponse bundlesListResponse;
    public AndroidpublisherEditsBundlesListResponse withBundlesListResponse(openapisdk.models.shared.BundlesListResponse bundlesListResponse) {
        this.bundlesListResponse = bundlesListResponse;
        return this;
    }
    public String contentType;
    public AndroidpublisherEditsBundlesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AndroidpublisherEditsBundlesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}