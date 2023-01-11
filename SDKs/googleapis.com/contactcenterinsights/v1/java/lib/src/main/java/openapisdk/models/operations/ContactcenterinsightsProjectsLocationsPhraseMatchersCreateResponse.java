package openapisdk.models.operations;



public class ContactcenterinsightsProjectsLocationsPhraseMatchersCreateResponse {
    public String contentType;
    public ContactcenterinsightsProjectsLocationsPhraseMatchersCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudContactcenterinsightsV1PhraseMatcher googleCloudContactcenterinsightsV1PhraseMatcher;
    public ContactcenterinsightsProjectsLocationsPhraseMatchersCreateResponse withGoogleCloudContactcenterinsightsV1PhraseMatcher(openapisdk.models.shared.GoogleCloudContactcenterinsightsV1PhraseMatcher googleCloudContactcenterinsightsV1PhraseMatcher) {
        this.googleCloudContactcenterinsightsV1PhraseMatcher = googleCloudContactcenterinsightsV1PhraseMatcher;
        return this;
    }
    public Long statusCode;
    public ContactcenterinsightsProjectsLocationsPhraseMatchersCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}