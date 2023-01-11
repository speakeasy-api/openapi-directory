package openapisdk.models.operations;



public class CalendarAclGetResponse {
    public openapisdk.models.shared.AclRule aclRule;
    public CalendarAclGetResponse withAclRule(openapisdk.models.shared.AclRule aclRule) {
        this.aclRule = aclRule;
        return this;
    }
    public String contentType;
    public CalendarAclGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CalendarAclGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}