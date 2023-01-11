package openapisdk.models.operations;



public class FormsFormsWatchesListResponse {
    public String contentType;
    public FormsFormsWatchesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListWatchesResponse listWatchesResponse;
    public FormsFormsWatchesListResponse withListWatchesResponse(openapisdk.models.shared.ListWatchesResponse listWatchesResponse) {
        this.listWatchesResponse = listWatchesResponse;
        return this;
    }
    public Long statusCode;
    public FormsFormsWatchesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}