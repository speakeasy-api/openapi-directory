package openapisdk.models.operations;



public class PeopleOtherContactsCopyOtherContactToMyContactsGroupResponse {
    public String contentType;
    public PeopleOtherContactsCopyOtherContactToMyContactsGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Person person;
    public PeopleOtherContactsCopyOtherContactToMyContactsGroupResponse withPerson(openapisdk.models.shared.Person person) {
        this.person = person;
        return this;
    }
    public Long statusCode;
    public PeopleOtherContactsCopyOtherContactToMyContactsGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}