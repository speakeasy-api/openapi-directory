package openapisdk.models.operations;



public class ExtrasConfigContextsReadResponse {
    public openapisdk.models.shared.ConfigContext configContext;
    public ExtrasConfigContextsReadResponse withConfigContext(openapisdk.models.shared.ConfigContext configContext) {
        this.configContext = configContext;
        return this;
    }
    public String contentType;
    public ExtrasConfigContextsReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ExtrasConfigContextsReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}