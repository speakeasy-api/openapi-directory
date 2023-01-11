package openapisdk.models.operations;



public class EssentialcontactsProjectsContactsGetResponse {
    public String contentType;
    public EssentialcontactsProjectsContactsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudEssentialcontactsV1Contact googleCloudEssentialcontactsV1Contact;
    public EssentialcontactsProjectsContactsGetResponse withGoogleCloudEssentialcontactsV1Contact(openapisdk.models.shared.GoogleCloudEssentialcontactsV1Contact googleCloudEssentialcontactsV1Contact) {
        this.googleCloudEssentialcontactsV1Contact = googleCloudEssentialcontactsV1Contact;
        return this;
    }
    public Long statusCode;
    public EssentialcontactsProjectsContactsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}