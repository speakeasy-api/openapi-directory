package openapisdk.models.operations;



public class DcimConsolePortTemplatesReadResponse {
    public openapisdk.models.shared.ConsolePortTemplate consolePortTemplate;
    public DcimConsolePortTemplatesReadResponse withConsolePortTemplate(openapisdk.models.shared.ConsolePortTemplate consolePortTemplate) {
        this.consolePortTemplate = consolePortTemplate;
        return this;
    }
    public String contentType;
    public DcimConsolePortTemplatesReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DcimConsolePortTemplatesReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}