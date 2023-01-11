package openapisdk.models.operations;



public class ProdTtSasportalNodesNodesNodesCreateResponse {
    public String contentType;
    public ProdTtSasportalNodesNodesNodesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SasPortalNode sasPortalNode;
    public ProdTtSasportalNodesNodesNodesCreateResponse withSasPortalNode(openapisdk.models.shared.SasPortalNode sasPortalNode) {
        this.sasPortalNode = sasPortalNode;
        return this;
    }
    public Long statusCode;
    public ProdTtSasportalNodesNodesNodesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}