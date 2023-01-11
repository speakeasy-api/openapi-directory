package openapisdk.models.operations;



public class DcimPowerPortsReadResponse {
    public String contentType;
    public DcimPowerPortsReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PowerPort powerPort;
    public DcimPowerPortsReadResponse withPowerPort(openapisdk.models.shared.PowerPort powerPort) {
        this.powerPort = powerPort;
        return this;
    }
    public Long statusCode;
    public DcimPowerPortsReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}