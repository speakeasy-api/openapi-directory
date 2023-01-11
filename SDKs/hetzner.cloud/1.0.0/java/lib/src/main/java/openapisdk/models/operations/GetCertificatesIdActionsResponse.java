package openapisdk.models.operations;



public class GetCertificatesIdActionsResponse {
    public GetCertificatesIdActionsActionsResponse actionsResponse;
    public GetCertificatesIdActionsResponse withActionsResponse(GetCertificatesIdActionsActionsResponse actionsResponse) {
        this.actionsResponse = actionsResponse;
        return this;
    }
    public String contentType;
    public GetCertificatesIdActionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCertificatesIdActionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}