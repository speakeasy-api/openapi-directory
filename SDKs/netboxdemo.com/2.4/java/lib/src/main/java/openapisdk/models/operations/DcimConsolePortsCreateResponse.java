package openapisdk.models.operations;



public class DcimConsolePortsCreateResponse {
    public openapisdk.models.shared.ConsolePort consolePort;
    public DcimConsolePortsCreateResponse withConsolePort(openapisdk.models.shared.ConsolePort consolePort) {
        this.consolePort = consolePort;
        return this;
    }
    public String contentType;
    public DcimConsolePortsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DcimConsolePortsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}