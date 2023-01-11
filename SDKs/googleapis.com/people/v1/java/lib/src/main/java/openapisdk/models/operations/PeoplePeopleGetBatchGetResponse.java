package openapisdk.models.operations;



public class PeoplePeopleGetBatchGetResponse {
    public String contentType;
    public PeoplePeopleGetBatchGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetPeopleResponse getPeopleResponse;
    public PeoplePeopleGetBatchGetResponse withGetPeopleResponse(openapisdk.models.shared.GetPeopleResponse getPeopleResponse) {
        this.getPeopleResponse = getPeopleResponse;
        return this;
    }
    public Long statusCode;
    public PeoplePeopleGetBatchGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}