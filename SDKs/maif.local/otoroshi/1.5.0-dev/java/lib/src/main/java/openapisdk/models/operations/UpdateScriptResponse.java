package openapisdk.models.operations;



public class UpdateScriptResponse {
    public String contentType;
    public UpdateScriptResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Script script;
    public UpdateScriptResponse withScript(openapisdk.models.shared.Script script) {
        this.script = script;
        return this;
    }
    public Long statusCode;
    public UpdateScriptResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}