package openapisdk.models.operations;



public class ListMemberResponse {
    public String contentType;
    public ListMemberResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListMemberListMemberResponse listMemberResponse;
    public ListMemberResponse withListMemberResponse(ListMemberListMemberResponse listMemberResponse) {
        this.listMemberResponse = listMemberResponse;
        return this;
    }
    public Long statusCode;
    public ListMemberResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}