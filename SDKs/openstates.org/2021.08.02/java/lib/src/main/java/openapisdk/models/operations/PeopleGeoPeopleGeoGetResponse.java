package openapisdk.models.operations;



public class PeopleGeoPeopleGeoGetResponse {
    public String contentType;
    public PeopleGeoPeopleGeoGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public PeopleGeoPeopleGeoGetResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public openapisdk.models.shared.PersonList personList;
    public PeopleGeoPeopleGeoGetResponse withPersonList(openapisdk.models.shared.PersonList personList) {
        this.personList = personList;
        return this;
    }
    public Long statusCode;
    public PeopleGeoPeopleGeoGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}