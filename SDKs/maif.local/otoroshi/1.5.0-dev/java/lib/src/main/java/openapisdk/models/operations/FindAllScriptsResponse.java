package openapisdk.models.operations;



public class FindAllScriptsResponse {
    public String contentType;
    public FindAllScriptsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Script[] scripts;
    public FindAllScriptsResponse withScripts(openapisdk.models.shared.Script[] scripts) {
        this.scripts = scripts;
        return this;
    }
    public Long statusCode;
    public FindAllScriptsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}