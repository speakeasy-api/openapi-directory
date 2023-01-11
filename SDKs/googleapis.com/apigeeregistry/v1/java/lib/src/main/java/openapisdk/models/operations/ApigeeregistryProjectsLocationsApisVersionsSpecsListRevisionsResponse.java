package openapisdk.models.operations;



public class ApigeeregistryProjectsLocationsApisVersionsSpecsListRevisionsResponse {
    public String contentType;
    public ApigeeregistryProjectsLocationsApisVersionsSpecsListRevisionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListApiSpecRevisionsResponse listApiSpecRevisionsResponse;
    public ApigeeregistryProjectsLocationsApisVersionsSpecsListRevisionsResponse withListApiSpecRevisionsResponse(openapisdk.models.shared.ListApiSpecRevisionsResponse listApiSpecRevisionsResponse) {
        this.listApiSpecRevisionsResponse = listApiSpecRevisionsResponse;
        return this;
    }
    public Long statusCode;
    public ApigeeregistryProjectsLocationsApisVersionsSpecsListRevisionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}