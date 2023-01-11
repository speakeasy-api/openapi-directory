package openapisdk.models.operations;



public class GetJobTypesResponse {
    public String contentType;
    public GetJobTypesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetJobTypesResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.JobType[] jobTypes;
    public GetJobTypesResponse withJobTypes(openapisdk.models.shared.JobType[] jobTypes) {
        this.jobTypes = jobTypes;
        return this;
    }
    public Long statusCode;
    public GetJobTypesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}