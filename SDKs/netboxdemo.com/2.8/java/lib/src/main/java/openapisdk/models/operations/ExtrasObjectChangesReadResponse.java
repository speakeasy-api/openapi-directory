package openapisdk.models.operations;



public class ExtrasObjectChangesReadResponse {
    public String contentType;
    public ExtrasObjectChangesReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ObjectChange objectChange;
    public ExtrasObjectChangesReadResponse withObjectChange(openapisdk.models.shared.ObjectChange objectChange) {
        this.objectChange = objectChange;
        return this;
    }
    public Long statusCode;
    public ExtrasObjectChangesReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}