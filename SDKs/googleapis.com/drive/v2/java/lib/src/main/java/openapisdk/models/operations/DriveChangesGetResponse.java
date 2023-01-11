package openapisdk.models.operations;



public class DriveChangesGetResponse {
    public openapisdk.models.shared.Change change;
    public DriveChangesGetResponse withChange(openapisdk.models.shared.Change change) {
        this.change = change;
        return this;
    }
    public String contentType;
    public DriveChangesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DriveChangesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}