package openapisdk.models.operations;



public class DcimPowerPortsPartialUpdateResponse {
    public String contentType;
    public DcimPowerPortsPartialUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PowerPort powerPort;
    public DcimPowerPortsPartialUpdateResponse withPowerPort(openapisdk.models.shared.PowerPort powerPort) {
        this.powerPort = powerPort;
        return this;
    }
    public Long statusCode;
    public DcimPowerPortsPartialUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}