package openapisdk.models.operations;



public class ListPaymentsAuditV3Response {
    public String contentType;
    public ListPaymentsAuditV3Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListPaymentsResponseV3 listPaymentsResponseV3;
    public ListPaymentsAuditV3Response withListPaymentsResponseV3(openapisdk.models.shared.ListPaymentsResponseV3 listPaymentsResponseV3) {
        this.listPaymentsResponseV3 = listPaymentsResponseV3;
        return this;
    }
    public Long statusCode;
    public ListPaymentsAuditV3Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object inlineResponse400;
    public ListPaymentsAuditV3Response withInlineResponse400(Object inlineResponse400) {
        this.inlineResponse400 = inlineResponse400;
        return this;
    }
    public Object inlineResponse401;
    public ListPaymentsAuditV3Response withInlineResponse401(Object inlineResponse401) {
        this.inlineResponse401 = inlineResponse401;
        return this;
    }
    public Object inlineResponse403;
    public ListPaymentsAuditV3Response withInlineResponse403(Object inlineResponse403) {
        this.inlineResponse403 = inlineResponse403;
        return this;
    }
}