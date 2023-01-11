package openapisdk.models.operations;



public class DcimCablesReadResponse {
    public openapisdk.models.shared.Cable cable;
    public DcimCablesReadResponse withCable(openapisdk.models.shared.Cable cable) {
        this.cable = cable;
        return this;
    }
    public String contentType;
    public DcimCablesReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DcimCablesReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}