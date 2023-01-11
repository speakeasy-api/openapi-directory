package openapisdk.models.operations;



public class SasportalNodesNodesNodesCreateResponse {
    public String contentType;
    public SasportalNodesNodesNodesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SasPortalNode sasPortalNode;
    public SasportalNodesNodesNodesCreateResponse withSasPortalNode(openapisdk.models.shared.SasPortalNode sasPortalNode) {
        this.sasPortalNode = sasPortalNode;
        return this;
    }
    public Long statusCode;
    public SasportalNodesNodesNodesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}