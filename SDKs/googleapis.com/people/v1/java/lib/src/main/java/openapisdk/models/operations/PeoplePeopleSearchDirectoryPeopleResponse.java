package openapisdk.models.operations;



public class PeoplePeopleSearchDirectoryPeopleResponse {
    public String contentType;
    public PeoplePeopleSearchDirectoryPeopleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SearchDirectoryPeopleResponse searchDirectoryPeopleResponse;
    public PeoplePeopleSearchDirectoryPeopleResponse withSearchDirectoryPeopleResponse(openapisdk.models.shared.SearchDirectoryPeopleResponse searchDirectoryPeopleResponse) {
        this.searchDirectoryPeopleResponse = searchDirectoryPeopleResponse;
        return this;
    }
    public Long statusCode;
    public PeoplePeopleSearchDirectoryPeopleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}