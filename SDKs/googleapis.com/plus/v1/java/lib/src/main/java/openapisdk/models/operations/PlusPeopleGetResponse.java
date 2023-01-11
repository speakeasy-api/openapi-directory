package openapisdk.models.operations;



public class PlusPeopleGetResponse {
    public String contentType;
    public PlusPeopleGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Person person;
    public PlusPeopleGetResponse withPerson(openapisdk.models.shared.Person person) {
        this.person = person;
        return this;
    }
    public Long statusCode;
    public PlusPeopleGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}