package openapisdk.models.operations;



public class ExtrasConfigContextsUpdateResponse {
    public openapisdk.models.shared.ConfigContext configContext;
    public ExtrasConfigContextsUpdateResponse withConfigContext(openapisdk.models.shared.ConfigContext configContext) {
        this.configContext = configContext;
        return this;
    }
    public String contentType;
    public ExtrasConfigContextsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ExtrasConfigContextsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}