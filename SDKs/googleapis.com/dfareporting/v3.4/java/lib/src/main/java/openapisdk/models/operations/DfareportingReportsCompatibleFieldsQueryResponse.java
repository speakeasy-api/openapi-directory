package openapisdk.models.operations;



public class DfareportingReportsCompatibleFieldsQueryResponse {
    public openapisdk.models.shared.CompatibleFields compatibleFields;
    public DfareportingReportsCompatibleFieldsQueryResponse withCompatibleFields(openapisdk.models.shared.CompatibleFields compatibleFields) {
        this.compatibleFields = compatibleFields;
        return this;
    }
    public String contentType;
    public DfareportingReportsCompatibleFieldsQueryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DfareportingReportsCompatibleFieldsQueryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}