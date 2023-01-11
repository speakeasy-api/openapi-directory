package openapisdk.models.operations;



public class CreateAspspAuthorizationLinkResponse {
    public String contentType;
    public CreateAspspAuthorizationLinkResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RequisitionLinks requisitionLinks;
    public CreateAspspAuthorizationLinkResponse withRequisitionLinks(openapisdk.models.shared.RequisitionLinks requisitionLinks) {
        this.requisitionLinks = requisitionLinks;
        return this;
    }
    public Long statusCode;
    public CreateAspspAuthorizationLinkResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}