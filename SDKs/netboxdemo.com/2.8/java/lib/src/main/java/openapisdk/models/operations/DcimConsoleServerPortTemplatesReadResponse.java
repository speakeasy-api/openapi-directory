package openapisdk.models.operations;



public class DcimConsoleServerPortTemplatesReadResponse {
    public openapisdk.models.shared.ConsoleServerPortTemplate consoleServerPortTemplate;
    public DcimConsoleServerPortTemplatesReadResponse withConsoleServerPortTemplate(openapisdk.models.shared.ConsoleServerPortTemplate consoleServerPortTemplate) {
        this.consoleServerPortTemplate = consoleServerPortTemplate;
        return this;
    }
    public String contentType;
    public DcimConsoleServerPortTemplatesReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DcimConsoleServerPortTemplatesReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}