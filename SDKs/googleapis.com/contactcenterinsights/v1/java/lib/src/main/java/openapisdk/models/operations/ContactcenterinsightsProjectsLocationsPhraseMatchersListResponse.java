package openapisdk.models.operations;



public class ContactcenterinsightsProjectsLocationsPhraseMatchersListResponse {
    public String contentType;
    public ContactcenterinsightsProjectsLocationsPhraseMatchersListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudContactcenterinsightsV1ListPhraseMatchersResponse googleCloudContactcenterinsightsV1ListPhraseMatchersResponse;
    public ContactcenterinsightsProjectsLocationsPhraseMatchersListResponse withGoogleCloudContactcenterinsightsV1ListPhraseMatchersResponse(openapisdk.models.shared.GoogleCloudContactcenterinsightsV1ListPhraseMatchersResponse googleCloudContactcenterinsightsV1ListPhraseMatchersResponse) {
        this.googleCloudContactcenterinsightsV1ListPhraseMatchersResponse = googleCloudContactcenterinsightsV1ListPhraseMatchersResponse;
        return this;
    }
    public Long statusCode;
    public ContactcenterinsightsProjectsLocationsPhraseMatchersListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}