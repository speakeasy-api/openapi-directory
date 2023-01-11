package openapisdk.models.operations;



public class ListUserBindingResponse {
    public String contentType;
    public ListUserBindingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListUserBindingListUserBindingResponse listUserBindingResponse;
    public ListUserBindingResponse withListUserBindingResponse(ListUserBindingListUserBindingResponse listUserBindingResponse) {
        this.listUserBindingResponse = listUserBindingResponse;
        return this;
    }
    public Long statusCode;
    public ListUserBindingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}