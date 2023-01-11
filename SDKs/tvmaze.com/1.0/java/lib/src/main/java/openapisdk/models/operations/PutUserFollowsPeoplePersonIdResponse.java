package openapisdk.models.operations;



public class PutUserFollowsPeoplePersonIdResponse {
    public String contentType;
    public PutUserFollowsPeoplePersonIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PersonFollow personFollow;
    public PutUserFollowsPeoplePersonIdResponse withPersonFollow(openapisdk.models.shared.PersonFollow personFollow) {
        this.personFollow = personFollow;
        return this;
    }
    public Long statusCode;
    public PutUserFollowsPeoplePersonIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}