package openapisdk.models.operations;



public class DriveChildrenGetResponse {
    public openapisdk.models.shared.ChildReference childReference;
    public DriveChildrenGetResponse withChildReference(openapisdk.models.shared.ChildReference childReference) {
        this.childReference = childReference;
        return this;
    }
    public String contentType;
    public DriveChildrenGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DriveChildrenGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}