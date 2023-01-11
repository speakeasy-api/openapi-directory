package openapisdk.models.operations;



public class DfareportingCreativeFieldsInsertResponse {
    public String contentType;
    public DfareportingCreativeFieldsInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreativeField creativeField;
    public DfareportingCreativeFieldsInsertResponse withCreativeField(openapisdk.models.shared.CreativeField creativeField) {
        this.creativeField = creativeField;
        return this;
    }
    public Long statusCode;
    public DfareportingCreativeFieldsInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}