package openapisdk.models.operations;



public class DcimInterfaceConnectionsReadResponse {
    public String contentType;
    public DcimInterfaceConnectionsReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InterfaceConnection interfaceConnection;
    public DcimInterfaceConnectionsReadResponse withInterfaceConnection(openapisdk.models.shared.InterfaceConnection interfaceConnection) {
        this.interfaceConnection = interfaceConnection;
        return this;
    }
    public Long statusCode;
    public DcimInterfaceConnectionsReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}