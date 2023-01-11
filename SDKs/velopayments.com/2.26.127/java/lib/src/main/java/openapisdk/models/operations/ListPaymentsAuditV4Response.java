package openapisdk.models.operations;



public class ListPaymentsAuditV4Response {
    public String contentType;
    public ListPaymentsAuditV4Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListPaymentsResponseV4 listPaymentsResponseV4;
    public ListPaymentsAuditV4Response withListPaymentsResponseV4(openapisdk.models.shared.ListPaymentsResponseV4 listPaymentsResponseV4) {
        this.listPaymentsResponseV4 = listPaymentsResponseV4;
        return this;
    }
    public Long statusCode;
    public ListPaymentsAuditV4Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object inlineResponse400;
    public ListPaymentsAuditV4Response withInlineResponse400(Object inlineResponse400) {
        this.inlineResponse400 = inlineResponse400;
        return this;
    }
    public Object inlineResponse401;
    public ListPaymentsAuditV4Response withInlineResponse401(Object inlineResponse401) {
        this.inlineResponse401 = inlineResponse401;
        return this;
    }
    public Object inlineResponse403;
    public ListPaymentsAuditV4Response withInlineResponse403(Object inlineResponse403) {
        this.inlineResponse403 = inlineResponse403;
        return this;
    }
}