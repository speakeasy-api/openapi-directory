package openapisdk.models.operations;



public class DcimConsolePortsUpdateResponse {
    public openapisdk.models.shared.ConsolePort consolePort;
    public DcimConsolePortsUpdateResponse withConsolePort(openapisdk.models.shared.ConsolePort consolePort) {
        this.consolePort = consolePort;
        return this;
    }
    public String contentType;
    public DcimConsolePortsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DcimConsolePortsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}