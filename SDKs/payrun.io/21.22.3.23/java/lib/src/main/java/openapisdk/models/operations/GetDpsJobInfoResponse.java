package openapisdk.models.operations;



public class GetDpsJobInfoResponse {
    public String contentType;
    public GetDpsJobInfoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetDpsJobInfoResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public openapisdk.models.shared.JobInfo jobInfo;
    public GetDpsJobInfoResponse withJobInfo(openapisdk.models.shared.JobInfo jobInfo) {
        this.jobInfo = jobInfo;
        return this;
    }
    public Long statusCode;
    public GetDpsJobInfoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}