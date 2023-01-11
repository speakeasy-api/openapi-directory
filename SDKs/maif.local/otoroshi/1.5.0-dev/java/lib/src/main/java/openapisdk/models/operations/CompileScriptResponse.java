package openapisdk.models.operations;



public class CompileScriptResponse {
    public String contentType;
    public CompileScriptResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ScriptCompilationResult scriptCompilationResult;
    public CompileScriptResponse withScriptCompilationResult(openapisdk.models.shared.ScriptCompilationResult scriptCompilationResult) {
        this.scriptCompilationResult = scriptCompilationResult;
        return this;
    }
    public Long statusCode;
    public CompileScriptResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}