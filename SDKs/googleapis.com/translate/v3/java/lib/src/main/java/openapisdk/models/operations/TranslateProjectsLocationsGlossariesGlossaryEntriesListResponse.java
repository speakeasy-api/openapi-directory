package openapisdk.models.operations;



public class TranslateProjectsLocationsGlossariesGlossaryEntriesListResponse {
    public String contentType;
    public TranslateProjectsLocationsGlossariesGlossaryEntriesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListGlossaryEntriesResponse listGlossaryEntriesResponse;
    public TranslateProjectsLocationsGlossariesGlossaryEntriesListResponse withListGlossaryEntriesResponse(openapisdk.models.shared.ListGlossaryEntriesResponse listGlossaryEntriesResponse) {
        this.listGlossaryEntriesResponse = listGlossaryEntriesResponse;
        return this;
    }
    public Long statusCode;
    public TranslateProjectsLocationsGlossariesGlossaryEntriesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}