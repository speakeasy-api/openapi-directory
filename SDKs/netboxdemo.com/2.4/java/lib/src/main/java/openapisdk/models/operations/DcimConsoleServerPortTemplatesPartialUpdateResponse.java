package openapisdk.models.operations;



public class DcimConsoleServerPortTemplatesPartialUpdateResponse {
    public openapisdk.models.shared.ConsoleServerPortTemplate consoleServerPortTemplate;
    public DcimConsoleServerPortTemplatesPartialUpdateResponse withConsoleServerPortTemplate(openapisdk.models.shared.ConsoleServerPortTemplate consoleServerPortTemplate) {
        this.consoleServerPortTemplate = consoleServerPortTemplate;
        return this;
    }
    public String contentType;
    public DcimConsoleServerPortTemplatesPartialUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DcimConsoleServerPortTemplatesPartialUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}