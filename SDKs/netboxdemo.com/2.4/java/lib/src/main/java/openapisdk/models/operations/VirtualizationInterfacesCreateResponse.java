package openapisdk.models.operations;



public class VirtualizationInterfacesCreateResponse {
    public String contentType;
    public VirtualizationInterfacesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Interface interface_;
    public VirtualizationInterfacesCreateResponse withInterface(openapisdk.models.shared.Interface interface_) {
        this.interface_ = interface_;
        return this;
    }
    public Long statusCode;
    public VirtualizationInterfacesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}