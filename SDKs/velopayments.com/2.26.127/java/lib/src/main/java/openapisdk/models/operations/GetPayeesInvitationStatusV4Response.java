package openapisdk.models.operations;



public class GetPayeesInvitationStatusV4Response {
    public String contentType;
    public GetPayeesInvitationStatusV4Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PagedPayeeInvitationStatusResponse2 pagedPayeeInvitationStatusResponse2;
    public GetPayeesInvitationStatusV4Response withPagedPayeeInvitationStatusResponse2(openapisdk.models.shared.PagedPayeeInvitationStatusResponse2 pagedPayeeInvitationStatusResponse2) {
        this.pagedPayeeInvitationStatusResponse2 = pagedPayeeInvitationStatusResponse2;
        return this;
    }
    public Long statusCode;
    public GetPayeesInvitationStatusV4Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object inlineResponse400;
    public GetPayeesInvitationStatusV4Response withInlineResponse400(Object inlineResponse400) {
        this.inlineResponse400 = inlineResponse400;
        return this;
    }
    public Object inlineResponse401;
    public GetPayeesInvitationStatusV4Response withInlineResponse401(Object inlineResponse401) {
        this.inlineResponse401 = inlineResponse401;
        return this;
    }
    public Object inlineResponse403;
    public GetPayeesInvitationStatusV4Response withInlineResponse403(Object inlineResponse403) {
        this.inlineResponse403 = inlineResponse403;
        return this;
    }
    public Object inlineResponse404;
    public GetPayeesInvitationStatusV4Response withInlineResponse404(Object inlineResponse404) {
        this.inlineResponse404 = inlineResponse404;
        return this;
    }
}