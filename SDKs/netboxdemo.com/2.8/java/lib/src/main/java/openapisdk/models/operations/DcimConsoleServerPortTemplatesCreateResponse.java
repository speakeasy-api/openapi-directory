package openapisdk.models.operations;



public class DcimConsoleServerPortTemplatesCreateResponse {
    public openapisdk.models.shared.ConsoleServerPortTemplate consoleServerPortTemplate;
    public DcimConsoleServerPortTemplatesCreateResponse withConsoleServerPortTemplate(openapisdk.models.shared.ConsoleServerPortTemplate consoleServerPortTemplate) {
        this.consoleServerPortTemplate = consoleServerPortTemplate;
        return this;
    }
    public String contentType;
    public DcimConsoleServerPortTemplatesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DcimConsoleServerPortTemplatesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}