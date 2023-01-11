package openapisdk.models.operations;



public class DcimRearPortsUpdateResponse {
    public String contentType;
    public DcimRearPortsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RearPort rearPort;
    public DcimRearPortsUpdateResponse withRearPort(openapisdk.models.shared.RearPort rearPort) {
        this.rearPort = rearPort;
        return this;
    }
    public Long statusCode;
    public DcimRearPortsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}