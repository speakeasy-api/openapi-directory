package openapisdk.models.operations;



public class DfareportingCreativeFieldsPatchResponse {
    public String contentType;
    public DfareportingCreativeFieldsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreativeField creativeField;
    public DfareportingCreativeFieldsPatchResponse withCreativeField(openapisdk.models.shared.CreativeField creativeField) {
        this.creativeField = creativeField;
        return this;
    }
    public Long statusCode;
    public DfareportingCreativeFieldsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}