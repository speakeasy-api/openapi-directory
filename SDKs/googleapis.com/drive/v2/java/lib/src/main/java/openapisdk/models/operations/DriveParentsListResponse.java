package openapisdk.models.operations;



public class DriveParentsListResponse {
    public String contentType;
    public DriveParentsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ParentList parentList;
    public DriveParentsListResponse withParentList(openapisdk.models.shared.ParentList parentList) {
        this.parentList = parentList;
        return this;
    }
    public Long statusCode;
    public DriveParentsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}