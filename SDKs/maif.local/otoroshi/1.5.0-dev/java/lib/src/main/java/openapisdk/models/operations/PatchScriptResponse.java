package openapisdk.models.operations;



public class PatchScriptResponse {
    public String contentType;
    public PatchScriptResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Script script;
    public PatchScriptResponse withScript(openapisdk.models.shared.Script script) {
        this.script = script;
        return this;
    }
    public Long statusCode;
    public PatchScriptResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}