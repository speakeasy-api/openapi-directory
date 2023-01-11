package openapisdk.models.operations;



public class SasportalNodesNodesMoveResponse {
    public String contentType;
    public SasportalNodesNodesMoveResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SasPortalOperation sasPortalOperation;
    public SasportalNodesNodesMoveResponse withSasPortalOperation(openapisdk.models.shared.SasPortalOperation sasPortalOperation) {
        this.sasPortalOperation = sasPortalOperation;
        return this;
    }
    public Long statusCode;
    public SasportalNodesNodesMoveResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}