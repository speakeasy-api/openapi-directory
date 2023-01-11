package openapisdk.models.operations;



public class AndroidpublisherInternalappsharingartifactsUploadbundleResponse {
    public String contentType;
    public AndroidpublisherInternalappsharingartifactsUploadbundleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InternalAppSharingArtifact internalAppSharingArtifact;
    public AndroidpublisherInternalappsharingartifactsUploadbundleResponse withInternalAppSharingArtifact(openapisdk.models.shared.InternalAppSharingArtifact internalAppSharingArtifact) {
        this.internalAppSharingArtifact = internalAppSharingArtifact;
        return this;
    }
    public Long statusCode;
    public AndroidpublisherInternalappsharingartifactsUploadbundleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}