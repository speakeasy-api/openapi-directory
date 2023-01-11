package openapisdk.models.operations;



public class GetPayRunJobInfoResponse {
    public String contentType;
    public GetPayRunJobInfoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetPayRunJobInfoResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public openapisdk.models.shared.JobInfo jobInfo;
    public GetPayRunJobInfoResponse withJobInfo(openapisdk.models.shared.JobInfo jobInfo) {
        this.jobInfo = jobInfo;
        return this;
    }
    public Long statusCode;
    public GetPayRunJobInfoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}