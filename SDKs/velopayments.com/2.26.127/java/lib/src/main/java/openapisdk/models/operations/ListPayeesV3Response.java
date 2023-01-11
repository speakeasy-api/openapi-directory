package openapisdk.models.operations;



public class ListPayeesV3Response {
    public String contentType;
    public ListPayeesV3Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PagedPayeeResponse pagedPayeeResponse;
    public ListPayeesV3Response withPagedPayeeResponse(openapisdk.models.shared.PagedPayeeResponse pagedPayeeResponse) {
        this.pagedPayeeResponse = pagedPayeeResponse;
        return this;
    }
    public Long statusCode;
    public ListPayeesV3Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object inlineResponse400;
    public ListPayeesV3Response withInlineResponse400(Object inlineResponse400) {
        this.inlineResponse400 = inlineResponse400;
        return this;
    }
    public Object inlineResponse401;
    public ListPayeesV3Response withInlineResponse401(Object inlineResponse401) {
        this.inlineResponse401 = inlineResponse401;
        return this;
    }
    public Object inlineResponse403;
    public ListPayeesV3Response withInlineResponse403(Object inlineResponse403) {
        this.inlineResponse403 = inlineResponse403;
        return this;
    }
    public Object inlineResponse404;
    public ListPayeesV3Response withInlineResponse404(Object inlineResponse404) {
        this.inlineResponse404 = inlineResponse404;
        return this;
    }
}