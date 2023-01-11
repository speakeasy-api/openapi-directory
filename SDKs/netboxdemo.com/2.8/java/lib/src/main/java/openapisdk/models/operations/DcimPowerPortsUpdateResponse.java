package openapisdk.models.operations;



public class DcimPowerPortsUpdateResponse {
    public String contentType;
    public DcimPowerPortsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PowerPort powerPort;
    public DcimPowerPortsUpdateResponse withPowerPort(openapisdk.models.shared.PowerPort powerPort) {
        this.powerPort = powerPort;
        return this;
    }
    public Long statusCode;
    public DcimPowerPortsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}