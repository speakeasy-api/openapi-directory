package openapisdk.models.operations;



public class PeopleContactGroupsCreateResponse {
    public openapisdk.models.shared.ContactGroup contactGroup;
    public PeopleContactGroupsCreateResponse withContactGroup(openapisdk.models.shared.ContactGroup contactGroup) {
        this.contactGroup = contactGroup;
        return this;
    }
    public String contentType;
    public PeopleContactGroupsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PeopleContactGroupsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}