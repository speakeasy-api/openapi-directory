package openapisdk.models.operations;



public class AndroidpublisherInternalappsharingartifactsUploadapkResponse {
    public String contentType;
    public AndroidpublisherInternalappsharingartifactsUploadapkResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InternalAppSharingArtifact internalAppSharingArtifact;
    public AndroidpublisherInternalappsharingartifactsUploadapkResponse withInternalAppSharingArtifact(openapisdk.models.shared.InternalAppSharingArtifact internalAppSharingArtifact) {
        this.internalAppSharingArtifact = internalAppSharingArtifact;
        return this;
    }
    public Long statusCode;
    public AndroidpublisherInternalappsharingartifactsUploadapkResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}