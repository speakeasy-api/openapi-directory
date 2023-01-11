package openapisdk.models.operations;



public class DcimCablesUpdateResponse {
    public openapisdk.models.shared.Cable cable;
    public DcimCablesUpdateResponse withCable(openapisdk.models.shared.Cable cable) {
        this.cable = cable;
        return this;
    }
    public String contentType;
    public DcimCablesUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DcimCablesUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}