package openapisdk.models.operations;



public class DcimConsolePortTemplatesCreateResponse {
    public openapisdk.models.shared.ConsolePortTemplate consolePortTemplate;
    public DcimConsolePortTemplatesCreateResponse withConsolePortTemplate(openapisdk.models.shared.ConsolePortTemplate consolePortTemplate) {
        this.consolePortTemplate = consolePortTemplate;
        return this;
    }
    public String contentType;
    public DcimConsolePortTemplatesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DcimConsolePortTemplatesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}