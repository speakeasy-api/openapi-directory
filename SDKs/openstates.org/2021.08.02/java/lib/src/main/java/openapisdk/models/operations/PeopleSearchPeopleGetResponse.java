package openapisdk.models.operations;



public class PeopleSearchPeopleGetResponse {
    public String contentType;
    public PeopleSearchPeopleGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public PeopleSearchPeopleGetResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public openapisdk.models.shared.PersonList personList;
    public PeopleSearchPeopleGetResponse withPersonList(openapisdk.models.shared.PersonList personList) {
        this.personList = personList;
        return this;
    }
    public Long statusCode;
    public PeopleSearchPeopleGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}