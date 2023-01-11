package openapisdk.models.operations;



public class DcimConsoleServerPortsUpdateResponse {
    public openapisdk.models.shared.ConsoleServerPort consoleServerPort;
    public DcimConsoleServerPortsUpdateResponse withConsoleServerPort(openapisdk.models.shared.ConsoleServerPort consoleServerPort) {
        this.consoleServerPort = consoleServerPort;
        return this;
    }
    public String contentType;
    public DcimConsoleServerPortsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DcimConsoleServerPortsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}