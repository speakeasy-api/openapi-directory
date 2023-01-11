package openapisdk.models.operations;



public class DcimRearPortsPartialUpdateResponse {
    public String contentType;
    public DcimRearPortsPartialUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RearPort rearPort;
    public DcimRearPortsPartialUpdateResponse withRearPort(openapisdk.models.shared.RearPort rearPort) {
        this.rearPort = rearPort;
        return this;
    }
    public Long statusCode;
    public DcimRearPortsPartialUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}