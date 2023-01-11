package openapisdk.models.operations;



public class GetUserFollowsPeoplePersonIdResponse {
    public String contentType;
    public GetUserFollowsPeoplePersonIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PersonFollow personFollow;
    public GetUserFollowsPeoplePersonIdResponse withPersonFollow(openapisdk.models.shared.PersonFollow personFollow) {
        this.personFollow = personFollow;
        return this;
    }
    public Long statusCode;
    public GetUserFollowsPeoplePersonIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}