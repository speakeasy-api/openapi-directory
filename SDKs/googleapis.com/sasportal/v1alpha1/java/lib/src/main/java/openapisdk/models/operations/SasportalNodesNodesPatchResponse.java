package openapisdk.models.operations;



public class SasportalNodesNodesPatchResponse {
    public String contentType;
    public SasportalNodesNodesPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SasPortalNode sasPortalNode;
    public SasportalNodesNodesPatchResponse withSasPortalNode(openapisdk.models.shared.SasPortalNode sasPortalNode) {
        this.sasPortalNode = sasPortalNode;
        return this;
    }
    public Long statusCode;
    public SasportalNodesNodesPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}