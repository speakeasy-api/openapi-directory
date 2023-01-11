package openapisdk.models.operations;



public class VirtualizationInterfacesUpdateResponse {
    public String contentType;
    public VirtualizationInterfacesUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Interface interface_;
    public VirtualizationInterfacesUpdateResponse withInterface(openapisdk.models.shared.Interface interface_) {
        this.interface_ = interface_;
        return this;
    }
    public Long statusCode;
    public VirtualizationInterfacesUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}