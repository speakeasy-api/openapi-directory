package openapisdk.models.operations;



public class DcimConsolePortsReadResponse {
    public openapisdk.models.shared.ConsolePort consolePort;
    public DcimConsolePortsReadResponse withConsolePort(openapisdk.models.shared.ConsolePort consolePort) {
        this.consolePort = consolePort;
        return this;
    }
    public String contentType;
    public DcimConsolePortsReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DcimConsolePortsReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}