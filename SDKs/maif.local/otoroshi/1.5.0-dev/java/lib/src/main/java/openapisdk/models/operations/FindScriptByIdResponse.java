package openapisdk.models.operations;



public class FindScriptByIdResponse {
    public String contentType;
    public FindScriptByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Script script;
    public FindScriptByIdResponse withScript(openapisdk.models.shared.Script script) {
        this.script = script;
        return this;
    }
    public Long statusCode;
    public FindScriptByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}