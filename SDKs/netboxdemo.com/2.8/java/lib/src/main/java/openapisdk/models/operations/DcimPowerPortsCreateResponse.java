package openapisdk.models.operations;



public class DcimPowerPortsCreateResponse {
    public String contentType;
    public DcimPowerPortsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PowerPort powerPort;
    public DcimPowerPortsCreateResponse withPowerPort(openapisdk.models.shared.PowerPort powerPort) {
        this.powerPort = powerPort;
        return this;
    }
    public Long statusCode;
    public DcimPowerPortsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}