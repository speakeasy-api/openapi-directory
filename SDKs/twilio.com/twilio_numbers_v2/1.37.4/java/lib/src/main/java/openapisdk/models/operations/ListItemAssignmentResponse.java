package openapisdk.models.operations;



public class ListItemAssignmentResponse {
    public String contentType;
    public ListItemAssignmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListItemAssignmentListItemAssignmentResponse listItemAssignmentResponse;
    public ListItemAssignmentResponse withListItemAssignmentResponse(ListItemAssignmentListItemAssignmentResponse listItemAssignmentResponse) {
        this.listItemAssignmentResponse = listItemAssignmentResponse;
        return this;
    }
    public Long statusCode;
    public ListItemAssignmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}