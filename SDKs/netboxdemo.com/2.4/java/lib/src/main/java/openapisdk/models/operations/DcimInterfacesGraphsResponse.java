package openapisdk.models.operations;



public class DcimInterfacesGraphsResponse {
    public String contentType;
    public DcimInterfacesGraphsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Interface interface_;
    public DcimInterfacesGraphsResponse withInterface(openapisdk.models.shared.Interface interface_) {
        this.interface_ = interface_;
        return this;
    }
    public Long statusCode;
    public DcimInterfacesGraphsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}