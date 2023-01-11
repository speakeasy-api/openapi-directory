package openapisdk.models.operations;



public class DfareportingCreativeFieldsListResponse {
    public String contentType;
    public DfareportingCreativeFieldsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreativeFieldsListResponse creativeFieldsListResponse;
    public DfareportingCreativeFieldsListResponse withCreativeFieldsListResponse(openapisdk.models.shared.CreativeFieldsListResponse creativeFieldsListResponse) {
        this.creativeFieldsListResponse = creativeFieldsListResponse;
        return this;
    }
    public Long statusCode;
    public DfareportingCreativeFieldsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}