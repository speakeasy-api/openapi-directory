package openapisdk.models.operations;



public class DcimCablesPartialUpdateResponse {
    public openapisdk.models.shared.Cable cable;
    public DcimCablesPartialUpdateResponse withCable(openapisdk.models.shared.Cable cable) {
        this.cable = cable;
        return this;
    }
    public String contentType;
    public DcimCablesPartialUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DcimCablesPartialUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}