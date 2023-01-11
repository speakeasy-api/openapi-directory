package openapisdk.models.operations;



public class DcimFrontPortsUpdateResponse {
    public String contentType;
    public DcimFrontPortsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FrontPort frontPort;
    public DcimFrontPortsUpdateResponse withFrontPort(openapisdk.models.shared.FrontPort frontPort) {
        this.frontPort = frontPort;
        return this;
    }
    public Long statusCode;
    public DcimFrontPortsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}