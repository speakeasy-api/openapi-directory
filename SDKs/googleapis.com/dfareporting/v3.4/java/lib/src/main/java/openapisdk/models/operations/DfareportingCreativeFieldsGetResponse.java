package openapisdk.models.operations;



public class DfareportingCreativeFieldsGetResponse {
    public String contentType;
    public DfareportingCreativeFieldsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreativeField creativeField;
    public DfareportingCreativeFieldsGetResponse withCreativeField(openapisdk.models.shared.CreativeField creativeField) {
        this.creativeField = creativeField;
        return this;
    }
    public Long statusCode;
    public DfareportingCreativeFieldsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}