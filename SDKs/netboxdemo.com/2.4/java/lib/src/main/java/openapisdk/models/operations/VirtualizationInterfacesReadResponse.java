package openapisdk.models.operations;



public class VirtualizationInterfacesReadResponse {
    public String contentType;
    public VirtualizationInterfacesReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Interface interface_;
    public VirtualizationInterfacesReadResponse withInterface(openapisdk.models.shared.Interface interface_) {
        this.interface_ = interface_;
        return this;
    }
    public Long statusCode;
    public VirtualizationInterfacesReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}