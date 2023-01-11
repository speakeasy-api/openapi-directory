package openapisdk.models.operations;



public class DcimConsolePortTemplatesUpdateResponse {
    public openapisdk.models.shared.ConsolePortTemplate consolePortTemplate;
    public DcimConsolePortTemplatesUpdateResponse withConsolePortTemplate(openapisdk.models.shared.ConsolePortTemplate consolePortTemplate) {
        this.consolePortTemplate = consolePortTemplate;
        return this;
    }
    public String contentType;
    public DcimConsolePortTemplatesUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DcimConsolePortTemplatesUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}