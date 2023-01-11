package openapisdk.models.operations;



public class FactchecktoolsPagesCreateResponse {
    public String contentType;
    public FactchecktoolsPagesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage googleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage;
    public FactchecktoolsPagesCreateResponse withGoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage(openapisdk.models.shared.GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage googleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage) {
        this.googleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage = googleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage;
        return this;
    }
    public Long statusCode;
    public FactchecktoolsPagesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}