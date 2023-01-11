package openapisdk.models.operations;



public class DcimConsoleServerPortsCreateResponse {
    public openapisdk.models.shared.ConsoleServerPort consoleServerPort;
    public DcimConsoleServerPortsCreateResponse withConsoleServerPort(openapisdk.models.shared.ConsoleServerPort consoleServerPort) {
        this.consoleServerPort = consoleServerPort;
        return this;
    }
    public String contentType;
    public DcimConsoleServerPortsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DcimConsoleServerPortsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}