package openapisdk.models.operations;



public class DriveChangesListResponse {
    public openapisdk.models.shared.ChangeList changeList;
    public DriveChangesListResponse withChangeList(openapisdk.models.shared.ChangeList changeList) {
        this.changeList = changeList;
        return this;
    }
    public String contentType;
    public DriveChangesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DriveChangesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}