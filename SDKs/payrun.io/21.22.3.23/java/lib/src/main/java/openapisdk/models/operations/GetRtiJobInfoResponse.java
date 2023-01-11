package openapisdk.models.operations;



public class GetRtiJobInfoResponse {
    public String contentType;
    public GetRtiJobInfoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetRtiJobInfoResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public openapisdk.models.shared.JobInfo jobInfo;
    public GetRtiJobInfoResponse withJobInfo(openapisdk.models.shared.JobInfo jobInfo) {
        this.jobInfo = jobInfo;
        return this;
    }
    public Long statusCode;
    public GetRtiJobInfoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}