package openapisdk.models.operations;



public class GetListOfJobsResponse {
    public String contentType;
    public GetListOfJobsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public GetListOfJobs400ApplicationProblemPlusJson getListOfJobs400ApplicationProblemPlusJsonObject;
    public GetListOfJobsResponse withGetListOfJobs400ApplicationProblemPlusJsonObject(GetListOfJobs400ApplicationProblemPlusJson getListOfJobs400ApplicationProblemPlusJsonObject) {
        this.getListOfJobs400ApplicationProblemPlusJsonObject = getListOfJobs400ApplicationProblemPlusJsonObject;
        return this;
    }
    public Object getListOfJobs401ApplicationProblemPlusJsonAny;
    public GetListOfJobsResponse withGetListOfJobs401ApplicationProblemPlusJsonAny(Object getListOfJobs401ApplicationProblemPlusJsonAny) {
        this.getListOfJobs401ApplicationProblemPlusJsonAny = getListOfJobs401ApplicationProblemPlusJsonAny;
        return this;
    }
    public openapisdk.models.shared.Job[] jobs;
    public GetListOfJobsResponse withJobs(openapisdk.models.shared.Job[] jobs) {
        this.jobs = jobs;
        return this;
    }
    public Long statusCode;
    public GetListOfJobsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}