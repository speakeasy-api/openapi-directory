package openapisdk.models.operations;



public class GetThirdPartyJobInfoResponse {
    public String contentType;
    public GetThirdPartyJobInfoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetThirdPartyJobInfoResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public openapisdk.models.shared.JobInfo jobInfo;
    public GetThirdPartyJobInfoResponse withJobInfo(openapisdk.models.shared.JobInfo jobInfo) {
        this.jobInfo = jobInfo;
        return this;
    }
    public Long statusCode;
    public GetThirdPartyJobInfoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}