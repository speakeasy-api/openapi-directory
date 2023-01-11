package openapisdk.models.operations;



public class DriveChildrenInsertResponse {
    public openapisdk.models.shared.ChildReference childReference;
    public DriveChildrenInsertResponse withChildReference(openapisdk.models.shared.ChildReference childReference) {
        this.childReference = childReference;
        return this;
    }
    public String contentType;
    public DriveChildrenInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DriveChildrenInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}