package openapisdk.models.operations;



public class ProdTtSasportalNodesNodesGetResponse {
    public String contentType;
    public ProdTtSasportalNodesNodesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SasPortalNode sasPortalNode;
    public ProdTtSasportalNodesNodesGetResponse withSasPortalNode(openapisdk.models.shared.SasPortalNode sasPortalNode) {
        this.sasPortalNode = sasPortalNode;
        return this;
    }
    public Long statusCode;
    public ProdTtSasportalNodesNodesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}