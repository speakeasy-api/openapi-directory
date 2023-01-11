package openapisdk.models.operations;



public class DcimFrontPortsPartialUpdateResponse {
    public String contentType;
    public DcimFrontPortsPartialUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FrontPort frontPort;
    public DcimFrontPortsPartialUpdateResponse withFrontPort(openapisdk.models.shared.FrontPort frontPort) {
        this.frontPort = frontPort;
        return this;
    }
    public Long statusCode;
    public DcimFrontPortsPartialUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}