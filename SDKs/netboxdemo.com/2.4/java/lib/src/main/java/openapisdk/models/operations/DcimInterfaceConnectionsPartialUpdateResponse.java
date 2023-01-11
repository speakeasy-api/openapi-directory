package openapisdk.models.operations;



public class DcimInterfaceConnectionsPartialUpdateResponse {
    public String contentType;
    public DcimInterfaceConnectionsPartialUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InterfaceConnection interfaceConnection;
    public DcimInterfaceConnectionsPartialUpdateResponse withInterfaceConnection(openapisdk.models.shared.InterfaceConnection interfaceConnection) {
        this.interfaceConnection = interfaceConnection;
        return this;
    }
    public Long statusCode;
    public DcimInterfaceConnectionsPartialUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}