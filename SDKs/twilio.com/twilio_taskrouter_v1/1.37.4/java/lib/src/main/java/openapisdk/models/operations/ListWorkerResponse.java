package openapisdk.models.operations;



public class ListWorkerResponse {
    public String contentType;
    public ListWorkerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListWorkerListWorkerResponse listWorkerResponse;
    public ListWorkerResponse withListWorkerResponse(ListWorkerListWorkerResponse listWorkerResponse) {
        this.listWorkerResponse = listWorkerResponse;
        return this;
    }
    public Long statusCode;
    public ListWorkerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}