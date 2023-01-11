package openapisdk.models.operations;



public class OsconfigProjectsPatchJobsInstanceDetailsListResponse {
    public String contentType;
    public OsconfigProjectsPatchJobsInstanceDetailsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListPatchJobInstanceDetailsResponse listPatchJobInstanceDetailsResponse;
    public OsconfigProjectsPatchJobsInstanceDetailsListResponse withListPatchJobInstanceDetailsResponse(openapisdk.models.shared.ListPatchJobInstanceDetailsResponse listPatchJobInstanceDetailsResponse) {
        this.listPatchJobInstanceDetailsResponse = listPatchJobInstanceDetailsResponse;
        return this;
    }
    public Long statusCode;
    public OsconfigProjectsPatchJobsInstanceDetailsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}