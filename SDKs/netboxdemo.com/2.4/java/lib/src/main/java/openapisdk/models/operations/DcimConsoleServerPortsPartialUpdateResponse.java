package openapisdk.models.operations;



public class DcimConsoleServerPortsPartialUpdateResponse {
    public openapisdk.models.shared.ConsoleServerPort consoleServerPort;
    public DcimConsoleServerPortsPartialUpdateResponse withConsoleServerPort(openapisdk.models.shared.ConsoleServerPort consoleServerPort) {
        this.consoleServerPort = consoleServerPort;
        return this;
    }
    public String contentType;
    public DcimConsoleServerPortsPartialUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DcimConsoleServerPortsPartialUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}