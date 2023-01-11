package openapisdk.models.operations;



public class DcimInterfaceConnectionsCreateResponse {
    public String contentType;
    public DcimInterfaceConnectionsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InterfaceConnection interfaceConnection;
    public DcimInterfaceConnectionsCreateResponse withInterfaceConnection(openapisdk.models.shared.InterfaceConnection interfaceConnection) {
        this.interfaceConnection = interfaceConnection;
        return this;
    }
    public Long statusCode;
    public DcimInterfaceConnectionsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}