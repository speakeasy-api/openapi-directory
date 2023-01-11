package openapisdk.models.operations;



public class DcimRearPortsCreateResponse {
    public String contentType;
    public DcimRearPortsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RearPort rearPort;
    public DcimRearPortsCreateResponse withRearPort(openapisdk.models.shared.RearPort rearPort) {
        this.rearPort = rearPort;
        return this;
    }
    public Long statusCode;
    public DcimRearPortsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}