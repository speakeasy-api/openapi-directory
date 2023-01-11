package openapisdk.models.operations;



public class DfareportingSizesListResponse {
    public String contentType;
    public DfareportingSizesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SizesListResponse sizesListResponse;
    public DfareportingSizesListResponse withSizesListResponse(openapisdk.models.shared.SizesListResponse sizesListResponse) {
        this.sizesListResponse = sizesListResponse;
        return this;
    }
    public Long statusCode;
    public DfareportingSizesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}