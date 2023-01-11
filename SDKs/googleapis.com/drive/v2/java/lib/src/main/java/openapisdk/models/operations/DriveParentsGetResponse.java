package openapisdk.models.operations;



public class DriveParentsGetResponse {
    public String contentType;
    public DriveParentsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ParentReference parentReference;
    public DriveParentsGetResponse withParentReference(openapisdk.models.shared.ParentReference parentReference) {
        this.parentReference = parentReference;
        return this;
    }
    public Long statusCode;
    public DriveParentsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}