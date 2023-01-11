package openapisdk.models.operations;



public class EssentialcontactsProjectsContactsCreateResponse {
    public String contentType;
    public EssentialcontactsProjectsContactsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudEssentialcontactsV1Contact googleCloudEssentialcontactsV1Contact;
    public EssentialcontactsProjectsContactsCreateResponse withGoogleCloudEssentialcontactsV1Contact(openapisdk.models.shared.GoogleCloudEssentialcontactsV1Contact googleCloudEssentialcontactsV1Contact) {
        this.googleCloudEssentialcontactsV1Contact = googleCloudEssentialcontactsV1Contact;
        return this;
    }
    public Long statusCode;
    public EssentialcontactsProjectsContactsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}