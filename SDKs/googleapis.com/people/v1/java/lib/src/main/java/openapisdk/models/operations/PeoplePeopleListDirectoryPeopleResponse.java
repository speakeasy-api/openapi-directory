package openapisdk.models.operations;



public class PeoplePeopleListDirectoryPeopleResponse {
    public String contentType;
    public PeoplePeopleListDirectoryPeopleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListDirectoryPeopleResponse listDirectoryPeopleResponse;
    public PeoplePeopleListDirectoryPeopleResponse withListDirectoryPeopleResponse(openapisdk.models.shared.ListDirectoryPeopleResponse listDirectoryPeopleResponse) {
        this.listDirectoryPeopleResponse = listDirectoryPeopleResponse;
        return this;
    }
    public Long statusCode;
    public PeoplePeopleListDirectoryPeopleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}