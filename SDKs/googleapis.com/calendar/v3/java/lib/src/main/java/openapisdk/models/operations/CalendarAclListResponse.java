package openapisdk.models.operations;



public class CalendarAclListResponse {
    public openapisdk.models.shared.Acl acl;
    public CalendarAclListResponse withAcl(openapisdk.models.shared.Acl acl) {
        this.acl = acl;
        return this;
    }
    public String contentType;
    public CalendarAclListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CalendarAclListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}