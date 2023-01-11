package openapisdk.models.operations;



public class DcimFrontPortsReadResponse {
    public String contentType;
    public DcimFrontPortsReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FrontPort frontPort;
    public DcimFrontPortsReadResponse withFrontPort(openapisdk.models.shared.FrontPort frontPort) {
        this.frontPort = frontPort;
        return this;
    }
    public Long statusCode;
    public DcimFrontPortsReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}