package openapisdk.models.operations;



public class ProdTtSasportalNodesNodesPatchResponse {
    public String contentType;
    public ProdTtSasportalNodesNodesPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SasPortalNode sasPortalNode;
    public ProdTtSasportalNodesNodesPatchResponse withSasPortalNode(openapisdk.models.shared.SasPortalNode sasPortalNode) {
        this.sasPortalNode = sasPortalNode;
        return this;
    }
    public Long statusCode;
    public ProdTtSasportalNodesNodesPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}