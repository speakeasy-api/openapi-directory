package openapisdk.models.operations;



public class FactchecktoolsPagesListResponse {
    public String contentType;
    public FactchecktoolsPagesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleFactcheckingFactchecktoolsV1alpha1ListClaimReviewMarkupPagesResponse googleFactcheckingFactchecktoolsV1alpha1ListClaimReviewMarkupPagesResponse;
    public FactchecktoolsPagesListResponse withGoogleFactcheckingFactchecktoolsV1alpha1ListClaimReviewMarkupPagesResponse(openapisdk.models.shared.GoogleFactcheckingFactchecktoolsV1alpha1ListClaimReviewMarkupPagesResponse googleFactcheckingFactchecktoolsV1alpha1ListClaimReviewMarkupPagesResponse) {
        this.googleFactcheckingFactchecktoolsV1alpha1ListClaimReviewMarkupPagesResponse = googleFactcheckingFactchecktoolsV1alpha1ListClaimReviewMarkupPagesResponse;
        return this;
    }
    public Long statusCode;
    public FactchecktoolsPagesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}