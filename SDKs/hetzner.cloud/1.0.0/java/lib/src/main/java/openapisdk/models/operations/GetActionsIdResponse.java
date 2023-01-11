package openapisdk.models.operations;



public class GetActionsIdResponse {
    public GetActionsIdActionResponse actionResponse;
    public GetActionsIdResponse withActionResponse(GetActionsIdActionResponse actionResponse) {
        this.actionResponse = actionResponse;
        return this;
    }
    public String contentType;
    public GetActionsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetActionsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}