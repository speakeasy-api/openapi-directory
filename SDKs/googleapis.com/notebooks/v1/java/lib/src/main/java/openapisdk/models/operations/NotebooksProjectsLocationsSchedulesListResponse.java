package openapisdk.models.operations;



public class NotebooksProjectsLocationsSchedulesListResponse {
    public String contentType;
    public NotebooksProjectsLocationsSchedulesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListSchedulesResponse listSchedulesResponse;
    public NotebooksProjectsLocationsSchedulesListResponse withListSchedulesResponse(openapisdk.models.shared.ListSchedulesResponse listSchedulesResponse) {
        this.listSchedulesResponse = listSchedulesResponse;
        return this;
    }
    public Long statusCode;
    public NotebooksProjectsLocationsSchedulesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}