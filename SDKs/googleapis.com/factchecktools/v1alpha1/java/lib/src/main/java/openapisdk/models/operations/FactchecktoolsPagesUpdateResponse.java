package openapisdk.models.operations;



public class FactchecktoolsPagesUpdateResponse {
    public String contentType;
    public FactchecktoolsPagesUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage googleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage;
    public FactchecktoolsPagesUpdateResponse withGoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage(openapisdk.models.shared.GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage googleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage) {
        this.googleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage = googleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage;
        return this;
    }
    public Long statusCode;
    public FactchecktoolsPagesUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}