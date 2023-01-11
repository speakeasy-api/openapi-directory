package openapisdk.models.operations;



public class OsconfigProjectsPatchJobsListResponse {
    public String contentType;
    public OsconfigProjectsPatchJobsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListPatchJobsResponse listPatchJobsResponse;
    public OsconfigProjectsPatchJobsListResponse withListPatchJobsResponse(openapisdk.models.shared.ListPatchJobsResponse listPatchJobsResponse) {
        this.listPatchJobsResponse = listPatchJobsResponse;
        return this;
    }
    public Long statusCode;
    public OsconfigProjectsPatchJobsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}