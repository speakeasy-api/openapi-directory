package openapisdk.models.operations;



public class DcimInterfaceConnectionsUpdateResponse {
    public String contentType;
    public DcimInterfaceConnectionsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InterfaceConnection interfaceConnection;
    public DcimInterfaceConnectionsUpdateResponse withInterfaceConnection(openapisdk.models.shared.InterfaceConnection interfaceConnection) {
        this.interfaceConnection = interfaceConnection;
        return this;
    }
    public Long statusCode;
    public DcimInterfaceConnectionsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}