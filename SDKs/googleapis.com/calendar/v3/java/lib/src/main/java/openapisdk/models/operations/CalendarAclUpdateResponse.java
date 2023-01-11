package openapisdk.models.operations;



public class CalendarAclUpdateResponse {
    public openapisdk.models.shared.AclRule aclRule;
    public CalendarAclUpdateResponse withAclRule(openapisdk.models.shared.AclRule aclRule) {
        this.aclRule = aclRule;
        return this;
    }
    public String contentType;
    public CalendarAclUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CalendarAclUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}