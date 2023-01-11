package openapisdk.models.operations;



public class DfareportingSizesInsertResponse {
    public String contentType;
    public DfareportingSizesInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Size size;
    public DfareportingSizesInsertResponse withSize(openapisdk.models.shared.Size size) {
        this.size = size;
        return this;
    }
    public Long statusCode;
    public DfareportingSizesInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}