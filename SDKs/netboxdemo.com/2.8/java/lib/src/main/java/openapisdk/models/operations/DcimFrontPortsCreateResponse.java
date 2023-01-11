package openapisdk.models.operations;



public class DcimFrontPortsCreateResponse {
    public String contentType;
    public DcimFrontPortsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FrontPort frontPort;
    public DcimFrontPortsCreateResponse withFrontPort(openapisdk.models.shared.FrontPort frontPort) {
        this.frontPort = frontPort;
        return this;
    }
    public Long statusCode;
    public DcimFrontPortsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}