package openapisdk.models.operations;



public class CreateScriptResponse {
    public String contentType;
    public CreateScriptResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Script script;
    public CreateScriptResponse withScript(openapisdk.models.shared.Script script) {
        this.script = script;
        return this;
    }
    public Long statusCode;
    public CreateScriptResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}