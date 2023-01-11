package openapisdk.models.operations;



public class DcimConsoleServerPortsTraceResponse {
    public openapisdk.models.shared.ConsoleServerPort consoleServerPort;
    public DcimConsoleServerPortsTraceResponse withConsoleServerPort(openapisdk.models.shared.ConsoleServerPort consoleServerPort) {
        this.consoleServerPort = consoleServerPort;
        return this;
    }
    public String contentType;
    public DcimConsoleServerPortsTraceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DcimConsoleServerPortsTraceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}