package openapisdk.models.operations;



public class DcimConsolePortsTraceResponse {
    public openapisdk.models.shared.ConsolePort consolePort;
    public DcimConsolePortsTraceResponse withConsolePort(openapisdk.models.shared.ConsolePort consolePort) {
        this.consolePort = consolePort;
        return this;
    }
    public String contentType;
    public DcimConsolePortsTraceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DcimConsolePortsTraceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}