package openapisdk.models.operations;



public class ExtrasConfigContextsCreateResponse {
    public openapisdk.models.shared.ConfigContext configContext;
    public ExtrasConfigContextsCreateResponse withConfigContext(openapisdk.models.shared.ConfigContext configContext) {
        this.configContext = configContext;
        return this;
    }
    public String contentType;
    public ExtrasConfigContextsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ExtrasConfigContextsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}