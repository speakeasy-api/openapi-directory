package openapisdk.models.operations;



public class ListChallengeResponse {
    public String contentType;
    public ListChallengeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListChallengeListChallengeResponse listChallengeResponse;
    public ListChallengeResponse withListChallengeResponse(ListChallengeListChallengeResponse listChallengeResponse) {
        this.listChallengeResponse = listChallengeResponse;
        return this;
    }
    public Long statusCode;
    public ListChallengeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}