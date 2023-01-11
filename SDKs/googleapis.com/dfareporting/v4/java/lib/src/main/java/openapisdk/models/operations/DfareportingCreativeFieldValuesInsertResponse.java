package openapisdk.models.operations;



public class DfareportingCreativeFieldValuesInsertResponse {
    public String contentType;
    public DfareportingCreativeFieldValuesInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreativeFieldValue creativeFieldValue;
    public DfareportingCreativeFieldValuesInsertResponse withCreativeFieldValue(openapisdk.models.shared.CreativeFieldValue creativeFieldValue) {
        this.creativeFieldValue = creativeFieldValue;
        return this;
    }
    public Long statusCode;
    public DfareportingCreativeFieldValuesInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}