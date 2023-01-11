package openapisdk.models.operations;



public class PeoplePeopleUpdateContactResponse {
    public String contentType;
    public PeoplePeopleUpdateContactResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Person person;
    public PeoplePeopleUpdateContactResponse withPerson(openapisdk.models.shared.Person person) {
        this.person = person;
        return this;
    }
    public Long statusCode;
    public PeoplePeopleUpdateContactResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}