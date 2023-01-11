package openapisdk.models.operations;



public class CalendarAclInsertResponse {
    public openapisdk.models.shared.AclRule aclRule;
    public CalendarAclInsertResponse withAclRule(openapisdk.models.shared.AclRule aclRule) {
        this.aclRule = aclRule;
        return this;
    }
    public String contentType;
    public CalendarAclInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CalendarAclInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}