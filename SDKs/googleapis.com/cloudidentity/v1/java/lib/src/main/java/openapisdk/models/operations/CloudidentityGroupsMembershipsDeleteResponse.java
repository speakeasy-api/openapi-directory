package openapisdk.models.operations;



public class CloudidentityGroupsMembershipsDeleteResponse {
    public String contentType;
    public CloudidentityGroupsMembershipsDeleteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Operation operation;
    public CloudidentityGroupsMembershipsDeleteResponse withOperation(openapisdk.models.shared.Operation operation) {
        this.operation = operation;
        return this;
    }
    public Long statusCode;
    public CloudidentityGroupsMembershipsDeleteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}