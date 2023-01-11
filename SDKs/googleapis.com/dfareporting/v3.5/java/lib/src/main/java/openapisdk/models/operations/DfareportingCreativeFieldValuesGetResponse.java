package openapisdk.models.operations;



public class DfareportingCreativeFieldValuesGetResponse {
    public String contentType;
    public DfareportingCreativeFieldValuesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreativeFieldValue creativeFieldValue;
    public DfareportingCreativeFieldValuesGetResponse withCreativeFieldValue(openapisdk.models.shared.CreativeFieldValue creativeFieldValue) {
        this.creativeFieldValue = creativeFieldValue;
        return this;
    }
    public Long statusCode;
    public DfareportingCreativeFieldValuesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}