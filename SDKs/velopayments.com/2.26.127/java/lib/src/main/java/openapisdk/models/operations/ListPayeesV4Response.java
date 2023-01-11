package openapisdk.models.operations;



public class ListPayeesV4Response {
    public String contentType;
    public ListPayeesV4Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PagedPayeeResponse2 pagedPayeeResponse2;
    public ListPayeesV4Response withPagedPayeeResponse2(openapisdk.models.shared.PagedPayeeResponse2 pagedPayeeResponse2) {
        this.pagedPayeeResponse2 = pagedPayeeResponse2;
        return this;
    }
    public Long statusCode;
    public ListPayeesV4Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object inlineResponse400;
    public ListPayeesV4Response withInlineResponse400(Object inlineResponse400) {
        this.inlineResponse400 = inlineResponse400;
        return this;
    }
    public Object inlineResponse401;
    public ListPayeesV4Response withInlineResponse401(Object inlineResponse401) {
        this.inlineResponse401 = inlineResponse401;
        return this;
    }
    public Object inlineResponse403;
    public ListPayeesV4Response withInlineResponse403(Object inlineResponse403) {
        this.inlineResponse403 = inlineResponse403;
        return this;
    }
    public Object inlineResponse404;
    public ListPayeesV4Response withInlineResponse404(Object inlineResponse404) {
        this.inlineResponse404 = inlineResponse404;
        return this;
    }
}