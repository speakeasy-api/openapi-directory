package openapisdk.models.operations;



public class DriveChildrenListResponse {
    public openapisdk.models.shared.ChildList childList;
    public DriveChildrenListResponse withChildList(openapisdk.models.shared.ChildList childList) {
        this.childList = childList;
        return this;
    }
    public String contentType;
    public DriveChildrenListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DriveChildrenListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}