package openapisdk.models.operations;



public class DfareportingCreativeFieldValuesPatchResponse {
    public String contentType;
    public DfareportingCreativeFieldValuesPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreativeFieldValue creativeFieldValue;
    public DfareportingCreativeFieldValuesPatchResponse withCreativeFieldValue(openapisdk.models.shared.CreativeFieldValue creativeFieldValue) {
        this.creativeFieldValue = creativeFieldValue;
        return this;
    }
    public Long statusCode;
    public DfareportingCreativeFieldValuesPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}