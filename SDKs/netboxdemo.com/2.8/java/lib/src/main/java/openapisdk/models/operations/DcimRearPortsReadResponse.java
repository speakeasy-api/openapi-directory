package openapisdk.models.operations;



public class DcimRearPortsReadResponse {
    public String contentType;
    public DcimRearPortsReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RearPort rearPort;
    public DcimRearPortsReadResponse withRearPort(openapisdk.models.shared.RearPort rearPort) {
        this.rearPort = rearPort;
        return this;
    }
    public Long statusCode;
    public DcimRearPortsReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}