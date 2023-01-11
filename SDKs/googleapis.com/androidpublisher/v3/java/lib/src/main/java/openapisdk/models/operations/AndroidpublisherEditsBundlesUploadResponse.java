package openapisdk.models.operations;



public class AndroidpublisherEditsBundlesUploadResponse {
    public openapisdk.models.shared.Bundle bundle;
    public AndroidpublisherEditsBundlesUploadResponse withBundle(openapisdk.models.shared.Bundle bundle) {
        this.bundle = bundle;
        return this;
    }
    public String contentType;
    public AndroidpublisherEditsBundlesUploadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AndroidpublisherEditsBundlesUploadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}