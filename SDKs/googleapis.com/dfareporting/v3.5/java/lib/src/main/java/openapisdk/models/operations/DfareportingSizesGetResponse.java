package openapisdk.models.operations;



public class DfareportingSizesGetResponse {
    public String contentType;
    public DfareportingSizesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Size size;
    public DfareportingSizesGetResponse withSize(openapisdk.models.shared.Size size) {
        this.size = size;
        return this;
    }
    public Long statusCode;
    public DfareportingSizesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}