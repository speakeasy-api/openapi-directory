package openapisdk.models.operations;



public class TranscoderProjectsLocationsJobTemplatesListResponse {
    public String contentType;
    public TranscoderProjectsLocationsJobTemplatesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListJobTemplatesResponse listJobTemplatesResponse;
    public TranscoderProjectsLocationsJobTemplatesListResponse withListJobTemplatesResponse(openapisdk.models.shared.ListJobTemplatesResponse listJobTemplatesResponse) {
        this.listJobTemplatesResponse = listJobTemplatesResponse;
        return this;
    }
    public Long statusCode;
    public TranscoderProjectsLocationsJobTemplatesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}