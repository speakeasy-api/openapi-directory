package openapisdk.models.operations;



public class DfareportingCreativeFieldsUpdateResponse {
    public String contentType;
    public DfareportingCreativeFieldsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreativeField creativeField;
    public DfareportingCreativeFieldsUpdateResponse withCreativeField(openapisdk.models.shared.CreativeField creativeField) {
        this.creativeField = creativeField;
        return this;
    }
    public Long statusCode;
    public DfareportingCreativeFieldsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}