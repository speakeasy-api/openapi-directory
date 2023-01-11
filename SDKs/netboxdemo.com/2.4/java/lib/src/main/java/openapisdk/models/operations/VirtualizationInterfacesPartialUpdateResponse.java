package openapisdk.models.operations;



public class VirtualizationInterfacesPartialUpdateResponse {
    public String contentType;
    public VirtualizationInterfacesPartialUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Interface interface_;
    public VirtualizationInterfacesPartialUpdateResponse withInterface(openapisdk.models.shared.Interface interface_) {
        this.interface_ = interface_;
        return this;
    }
    public Long statusCode;
    public VirtualizationInterfacesPartialUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}