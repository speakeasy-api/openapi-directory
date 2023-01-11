package openapisdk.models.operations;



public class EssentialcontactsProjectsContactsListResponse {
    public String contentType;
    public EssentialcontactsProjectsContactsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudEssentialcontactsV1ListContactsResponse googleCloudEssentialcontactsV1ListContactsResponse;
    public EssentialcontactsProjectsContactsListResponse withGoogleCloudEssentialcontactsV1ListContactsResponse(openapisdk.models.shared.GoogleCloudEssentialcontactsV1ListContactsResponse googleCloudEssentialcontactsV1ListContactsResponse) {
        this.googleCloudEssentialcontactsV1ListContactsResponse = googleCloudEssentialcontactsV1ListContactsResponse;
        return this;
    }
    public Long statusCode;
    public EssentialcontactsProjectsContactsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}