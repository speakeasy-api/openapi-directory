package openapisdk.models.operations;



public class GetUserFollowsPeopleResponse {
    public String contentType;
    public GetUserFollowsPeopleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PersonFollow[] personFollows;
    public GetUserFollowsPeopleResponse withPersonFollows(openapisdk.models.shared.PersonFollow[] personFollows) {
        this.personFollows = personFollows;
        return this;
    }
    public Long statusCode;
    public GetUserFollowsPeopleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}