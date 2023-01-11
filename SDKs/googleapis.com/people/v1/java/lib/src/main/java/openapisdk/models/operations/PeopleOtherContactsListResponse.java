package openapisdk.models.operations;



public class PeopleOtherContactsListResponse {
    public String contentType;
    public PeopleOtherContactsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListOtherContactsResponse listOtherContactsResponse;
    public PeopleOtherContactsListResponse withListOtherContactsResponse(openapisdk.models.shared.ListOtherContactsResponse listOtherContactsResponse) {
        this.listOtherContactsResponse = listOtherContactsResponse;
        return this;
    }
    public Long statusCode;
    public PeopleOtherContactsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}