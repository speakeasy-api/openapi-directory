package openapisdk.models.operations;



public class FactchecktoolsClaimsSearchResponse {
    public String contentType;
    public FactchecktoolsClaimsSearchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse googleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse;
    public FactchecktoolsClaimsSearchResponse withGoogleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse(openapisdk.models.shared.GoogleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse googleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse) {
        this.googleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse = googleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse;
        return this;
    }
    public Long statusCode;
    public FactchecktoolsClaimsSearchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}