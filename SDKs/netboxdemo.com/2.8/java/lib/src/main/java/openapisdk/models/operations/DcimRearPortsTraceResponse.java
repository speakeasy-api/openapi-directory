package openapisdk.models.operations;



public class DcimRearPortsTraceResponse {
    public String contentType;
    public DcimRearPortsTraceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RearPort rearPort;
    public DcimRearPortsTraceResponse withRearPort(openapisdk.models.shared.RearPort rearPort) {
        this.rearPort = rearPort;
        return this;
    }
    public Long statusCode;
    public DcimRearPortsTraceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}