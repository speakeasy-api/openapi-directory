package openapisdk.models.operations;



public class DcimConsoleServerPortsReadResponse {
    public openapisdk.models.shared.ConsoleServerPort consoleServerPort;
    public DcimConsoleServerPortsReadResponse withConsoleServerPort(openapisdk.models.shared.ConsoleServerPort consoleServerPort) {
        this.consoleServerPort = consoleServerPort;
        return this;
    }
    public String contentType;
    public DcimConsoleServerPortsReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DcimConsoleServerPortsReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}