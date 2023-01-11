package openapisdk.models.operations;



public class SasportalNodesNodesGetResponse {
    public String contentType;
    public SasportalNodesNodesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SasPortalNode sasPortalNode;
    public SasportalNodesNodesGetResponse withSasPortalNode(openapisdk.models.shared.SasPortalNode sasPortalNode) {
        this.sasPortalNode = sasPortalNode;
        return this;
    }
    public Long statusCode;
    public SasportalNodesNodesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}