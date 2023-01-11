package openapisdk.models.operations;



public class DcimConsoleServerPortTemplatesUpdateResponse {
    public openapisdk.models.shared.ConsoleServerPortTemplate consoleServerPortTemplate;
    public DcimConsoleServerPortTemplatesUpdateResponse withConsoleServerPortTemplate(openapisdk.models.shared.ConsoleServerPortTemplate consoleServerPortTemplate) {
        this.consoleServerPortTemplate = consoleServerPortTemplate;
        return this;
    }
    public String contentType;
    public DcimConsoleServerPortTemplatesUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DcimConsoleServerPortTemplatesUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}