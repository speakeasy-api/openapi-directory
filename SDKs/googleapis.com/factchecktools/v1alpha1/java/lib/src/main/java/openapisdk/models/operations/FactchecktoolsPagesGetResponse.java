package openapisdk.models.operations;



public class FactchecktoolsPagesGetResponse {
    public String contentType;
    public FactchecktoolsPagesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage googleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage;
    public FactchecktoolsPagesGetResponse withGoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage(openapisdk.models.shared.GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage googleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage) {
        this.googleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage = googleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage;
        return this;
    }
    public Long statusCode;
    public FactchecktoolsPagesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}