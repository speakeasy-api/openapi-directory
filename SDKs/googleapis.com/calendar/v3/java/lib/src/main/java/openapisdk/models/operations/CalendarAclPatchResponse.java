package openapisdk.models.operations;



public class CalendarAclPatchResponse {
    public openapisdk.models.shared.AclRule aclRule;
    public CalendarAclPatchResponse withAclRule(openapisdk.models.shared.AclRule aclRule) {
        this.aclRule = aclRule;
        return this;
    }
    public String contentType;
    public CalendarAclPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CalendarAclPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}