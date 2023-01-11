package openapisdk.models.operations;



public class PeoplePeopleCreateContactResponse {
    public String contentType;
    public PeoplePeopleCreateContactResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Person person;
    public PeoplePeopleCreateContactResponse withPerson(openapisdk.models.shared.Person person) {
        this.person = person;
        return this;
    }
    public Long statusCode;
    public PeoplePeopleCreateContactResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}