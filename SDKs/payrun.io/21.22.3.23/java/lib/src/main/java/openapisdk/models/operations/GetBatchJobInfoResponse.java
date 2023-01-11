package openapisdk.models.operations;



public class GetBatchJobInfoResponse {
    public String contentType;
    public GetBatchJobInfoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetBatchJobInfoResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public openapisdk.models.shared.JobInfo jobInfo;
    public GetBatchJobInfoResponse withJobInfo(openapisdk.models.shared.JobInfo jobInfo) {
        this.jobInfo = jobInfo;
        return this;
    }
    public Long statusCode;
    public GetBatchJobInfoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}