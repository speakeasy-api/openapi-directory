package openapisdk.models.operations;



public class IamIamPoliciesQueryAuditableServicesResponse {
    public String contentType;
    public IamIamPoliciesQueryAuditableServicesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.QueryAuditableServicesResponse queryAuditableServicesResponse;
    public IamIamPoliciesQueryAuditableServicesResponse withQueryAuditableServicesResponse(openapisdk.models.shared.QueryAuditableServicesResponse queryAuditableServicesResponse) {
        this.queryAuditableServicesResponse = queryAuditableServicesResponse;
        return this;
    }
    public Long statusCode;
    public IamIamPoliciesQueryAuditableServicesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}