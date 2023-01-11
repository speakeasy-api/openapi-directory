package openapisdk.models.operations;



public class DcimCablesCreateResponse {
    public openapisdk.models.shared.Cable cable;
    public DcimCablesCreateResponse withCable(openapisdk.models.shared.Cable cable) {
        this.cable = cable;
        return this;
    }
    public String contentType;
    public DcimCablesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DcimCablesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}