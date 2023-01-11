package openapisdk.models.operations;



public class V3CreatePayeeResponse {
    public String contentType;
    public V3CreatePayeeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreatePayeesCsvResponse createPayeesCSVResponse;
    public V3CreatePayeeResponse withCreatePayeesCsvResponse(openapisdk.models.shared.CreatePayeesCsvResponse createPayeesCSVResponse) {
        this.createPayeesCSVResponse = createPayeesCSVResponse;
        return this;
    }
    public Long statusCode;
    public V3CreatePayeeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object inlineResponse400;
    public V3CreatePayeeResponse withInlineResponse400(Object inlineResponse400) {
        this.inlineResponse400 = inlineResponse400;
        return this;
    }
    public Object inlineResponse401;
    public V3CreatePayeeResponse withInlineResponse401(Object inlineResponse401) {
        this.inlineResponse401 = inlineResponse401;
        return this;
    }
    public Object inlineResponse403;
    public V3CreatePayeeResponse withInlineResponse403(Object inlineResponse403) {
        this.inlineResponse403 = inlineResponse403;
        return this;
    }
    public Object inlineResponse404;
    public V3CreatePayeeResponse withInlineResponse404(Object inlineResponse404) {
        this.inlineResponse404 = inlineResponse404;
        return this;
    }
}