package openapisdk.models.operations;



public class TranslateProjectsLocationsGlossariesListResponse {
    public String contentType;
    public TranslateProjectsLocationsGlossariesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListGlossariesResponse listGlossariesResponse;
    public TranslateProjectsLocationsGlossariesListResponse withListGlossariesResponse(openapisdk.models.shared.ListGlossariesResponse listGlossariesResponse) {
        this.listGlossariesResponse = listGlossariesResponse;
        return this;
    }
    public Long statusCode;
    public TranslateProjectsLocationsGlossariesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}