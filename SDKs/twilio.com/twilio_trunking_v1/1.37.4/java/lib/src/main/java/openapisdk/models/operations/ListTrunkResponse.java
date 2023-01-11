package openapisdk.models.operations;



public class ListTrunkResponse {
    public String contentType;
    public ListTrunkResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListTrunkListTrunkResponse listTrunkResponse;
    public ListTrunkResponse withListTrunkResponse(ListTrunkListTrunkResponse listTrunkResponse) {
        this.listTrunkResponse = listTrunkResponse;
        return this;
    }
    public Long statusCode;
    public ListTrunkResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}