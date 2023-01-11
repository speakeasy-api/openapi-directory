package openapisdk.models.operations;



public class ProdTtSasportalNodesNodesMoveResponse {
    public String contentType;
    public ProdTtSasportalNodesNodesMoveResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SasPortalOperation sasPortalOperation;
    public ProdTtSasportalNodesNodesMoveResponse withSasPortalOperation(openapisdk.models.shared.SasPortalOperation sasPortalOperation) {
        this.sasPortalOperation = sasPortalOperation;
        return this;
    }
    public Long statusCode;
    public ProdTtSasportalNodesNodesMoveResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}