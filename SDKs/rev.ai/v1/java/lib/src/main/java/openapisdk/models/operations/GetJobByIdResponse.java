package openapisdk.models.operations;



public class GetJobByIdResponse {
    public String contentType;
    public GetJobByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object getJobById401ApplicationProblemPlusJsonAny;
    public GetJobByIdResponse withGetJobById401ApplicationProblemPlusJsonAny(Object getJobById401ApplicationProblemPlusJsonAny) {
        this.getJobById401ApplicationProblemPlusJsonAny = getJobById401ApplicationProblemPlusJsonAny;
        return this;
    }
    public GetJobById404ApplicationProblemPlusJson getJobById404ApplicationProblemPlusJsonObject;
    public GetJobByIdResponse withGetJobById404ApplicationProblemPlusJsonObject(GetJobById404ApplicationProblemPlusJson getJobById404ApplicationProblemPlusJsonObject) {
        this.getJobById404ApplicationProblemPlusJsonObject = getJobById404ApplicationProblemPlusJsonObject;
        return this;
    }
    public openapisdk.models.shared.Job job;
    public GetJobByIdResponse withJob(openapisdk.models.shared.Job job) {
        this.job = job;
        return this;
    }
    public Long statusCode;
    public GetJobByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}