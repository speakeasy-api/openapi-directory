package openapisdk.models.operations;



public class DfareportingCreativesListResponse {
    public String contentType;
    public DfareportingCreativesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreativesListResponse creativesListResponse;
    public DfareportingCreativesListResponse withCreativesListResponse(openapisdk.models.shared.CreativesListResponse creativesListResponse) {
        this.creativesListResponse = creativesListResponse;
        return this;
    }
    public Long statusCode;
    public DfareportingCreativesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}