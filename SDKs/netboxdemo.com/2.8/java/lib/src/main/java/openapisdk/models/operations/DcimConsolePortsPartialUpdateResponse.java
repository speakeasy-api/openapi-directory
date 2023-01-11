package openapisdk.models.operations;



public class DcimConsolePortsPartialUpdateResponse {
    public openapisdk.models.shared.ConsolePort consolePort;
    public DcimConsolePortsPartialUpdateResponse withConsolePort(openapisdk.models.shared.ConsolePort consolePort) {
        this.consolePort = consolePort;
        return this;
    }
    public String contentType;
    public DcimConsolePortsPartialUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DcimConsolePortsPartialUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}