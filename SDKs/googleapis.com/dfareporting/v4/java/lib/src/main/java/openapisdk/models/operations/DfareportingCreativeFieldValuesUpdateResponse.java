package openapisdk.models.operations;



public class DfareportingCreativeFieldValuesUpdateResponse {
    public String contentType;
    public DfareportingCreativeFieldValuesUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreativeFieldValue creativeFieldValue;
    public DfareportingCreativeFieldValuesUpdateResponse withCreativeFieldValue(openapisdk.models.shared.CreativeFieldValue creativeFieldValue) {
        this.creativeFieldValue = creativeFieldValue;
        return this;
    }
    public Long statusCode;
    public DfareportingCreativeFieldValuesUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}