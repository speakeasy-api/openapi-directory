package openapisdk.models.operations;



public class PeopleContactGroupsListResponse {
    public String contentType;
    public PeopleContactGroupsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListContactGroupsResponse listContactGroupsResponse;
    public PeopleContactGroupsListResponse withListContactGroupsResponse(openapisdk.models.shared.ListContactGroupsResponse listContactGroupsResponse) {
        this.listContactGroupsResponse = listContactGroupsResponse;
        return this;
    }
    public Long statusCode;
    public PeopleContactGroupsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}