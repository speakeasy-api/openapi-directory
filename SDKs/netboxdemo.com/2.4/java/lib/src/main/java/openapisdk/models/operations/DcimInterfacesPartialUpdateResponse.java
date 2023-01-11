package openapisdk.models.operations;



public class DcimInterfacesPartialUpdateResponse {
    public String contentType;
    public DcimInterfacesPartialUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Interface interface_;
    public DcimInterfacesPartialUpdateResponse withInterface(openapisdk.models.shared.Interface interface_) {
        this.interface_ = interface_;
        return this;
    }
    public Long statusCode;
    public DcimInterfacesPartialUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}