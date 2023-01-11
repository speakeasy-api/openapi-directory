package openapisdk.models.operations;



public class DfareportingCreativeFieldValuesListResponse {
    public String contentType;
    public DfareportingCreativeFieldValuesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreativeFieldValuesListResponse creativeFieldValuesListResponse;
    public DfareportingCreativeFieldValuesListResponse withCreativeFieldValuesListResponse(openapisdk.models.shared.CreativeFieldValuesListResponse creativeFieldValuesListResponse) {
        this.creativeFieldValuesListResponse = creativeFieldValuesListResponse;
        return this;
    }
    public Long statusCode;
    public DfareportingCreativeFieldValuesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}