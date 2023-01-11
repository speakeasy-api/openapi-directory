package openapisdk.models.operations;



public class ExtrasConfigContextsPartialUpdateResponse {
    public openapisdk.models.shared.ConfigContext configContext;
    public ExtrasConfigContextsPartialUpdateResponse withConfigContext(openapisdk.models.shared.ConfigContext configContext) {
        this.configContext = configContext;
        return this;
    }
    public String contentType;
    public ExtrasConfigContextsPartialUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ExtrasConfigContextsPartialUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}