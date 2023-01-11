package openapisdk.models.operations;



public class PeoplePeopleGetResponse {
    public String contentType;
    public PeoplePeopleGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Person person;
    public PeoplePeopleGetResponse withPerson(openapisdk.models.shared.Person person) {
        this.person = person;
        return this;
    }
    public Long statusCode;
    public PeoplePeopleGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}