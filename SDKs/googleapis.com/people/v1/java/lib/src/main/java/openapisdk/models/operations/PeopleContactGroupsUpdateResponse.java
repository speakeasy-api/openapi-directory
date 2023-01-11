package openapisdk.models.operations;



public class PeopleContactGroupsUpdateResponse {
    public openapisdk.models.shared.ContactGroup contactGroup;
    public PeopleContactGroupsUpdateResponse withContactGroup(openapisdk.models.shared.ContactGroup contactGroup) {
        this.contactGroup = contactGroup;
        return this;
    }
    public String contentType;
    public PeopleContactGroupsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PeopleContactGroupsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}