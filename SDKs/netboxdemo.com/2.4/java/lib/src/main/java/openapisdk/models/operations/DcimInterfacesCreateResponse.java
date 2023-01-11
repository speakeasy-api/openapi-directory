package openapisdk.models.operations;



public class DcimInterfacesCreateResponse {
    public String contentType;
    public DcimInterfacesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Interface interface_;
    public DcimInterfacesCreateResponse withInterface(openapisdk.models.shared.Interface interface_) {
        this.interface_ = interface_;
        return this;
    }
    public Long statusCode;
    public DcimInterfacesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}