package openapisdk.models.operations;



public class DcimPowerPortsTraceResponse {
    public String contentType;
    public DcimPowerPortsTraceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PowerPort powerPort;
    public DcimPowerPortsTraceResponse withPowerPort(openapisdk.models.shared.PowerPort powerPort) {
        this.powerPort = powerPort;
        return this;
    }
    public Long statusCode;
    public DcimPowerPortsTraceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}