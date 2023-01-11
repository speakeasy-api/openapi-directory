package openapisdk.models.operations;



public class DcimConsolePortTemplatesPartialUpdateResponse {
    public openapisdk.models.shared.ConsolePortTemplate consolePortTemplate;
    public DcimConsolePortTemplatesPartialUpdateResponse withConsolePortTemplate(openapisdk.models.shared.ConsolePortTemplate consolePortTemplate) {
        this.consolePortTemplate = consolePortTemplate;
        return this;
    }
    public String contentType;
    public DcimConsolePortTemplatesPartialUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DcimConsolePortTemplatesPartialUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}