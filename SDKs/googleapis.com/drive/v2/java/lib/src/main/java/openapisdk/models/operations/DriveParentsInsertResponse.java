package openapisdk.models.operations;



public class DriveParentsInsertResponse {
    public String contentType;
    public DriveParentsInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ParentReference parentReference;
    public DriveParentsInsertResponse withParentReference(openapisdk.models.shared.ParentReference parentReference) {
        this.parentReference = parentReference;
        return this;
    }
    public Long statusCode;
    public DriveParentsInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}