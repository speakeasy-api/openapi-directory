package openapisdk.models.operations;



public class DcimFrontPortsTraceResponse {
    public String contentType;
    public DcimFrontPortsTraceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FrontPort frontPort;
    public DcimFrontPortsTraceResponse withFrontPort(openapisdk.models.shared.FrontPort frontPort) {
        this.frontPort = frontPort;
        return this;
    }
    public Long statusCode;
    public DcimFrontPortsTraceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}