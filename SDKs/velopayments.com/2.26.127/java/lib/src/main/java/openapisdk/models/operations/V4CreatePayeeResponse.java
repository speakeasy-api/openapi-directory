package openapisdk.models.operations;



public class V4CreatePayeeResponse {
    public String contentType;
    public V4CreatePayeeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreatePayeesCsvResponse2 createPayeesCSVResponse2;
    public V4CreatePayeeResponse withCreatePayeesCsvResponse2(openapisdk.models.shared.CreatePayeesCsvResponse2 createPayeesCSVResponse2) {
        this.createPayeesCSVResponse2 = createPayeesCSVResponse2;
        return this;
    }
    public Long statusCode;
    public V4CreatePayeeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object inlineResponse400;
    public V4CreatePayeeResponse withInlineResponse400(Object inlineResponse400) {
        this.inlineResponse400 = inlineResponse400;
        return this;
    }
    public Object inlineResponse401;
    public V4CreatePayeeResponse withInlineResponse401(Object inlineResponse401) {
        this.inlineResponse401 = inlineResponse401;
        return this;
    }
    public Object inlineResponse403;
    public V4CreatePayeeResponse withInlineResponse403(Object inlineResponse403) {
        this.inlineResponse403 = inlineResponse403;
        return this;
    }
    public Object inlineResponse404;
    public V4CreatePayeeResponse withInlineResponse404(Object inlineResponse404) {
        this.inlineResponse404 = inlineResponse404;
        return this;
    }
}