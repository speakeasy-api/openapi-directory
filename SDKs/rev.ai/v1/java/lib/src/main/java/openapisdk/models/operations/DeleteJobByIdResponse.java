package openapisdk.models.operations;



public class DeleteJobByIdResponse {
    public String contentType;
    public DeleteJobByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object deleteJobById401ApplicationProblemPlusJsonAny;
    public DeleteJobByIdResponse withDeleteJobById401ApplicationProblemPlusJsonAny(Object deleteJobById401ApplicationProblemPlusJsonAny) {
        this.deleteJobById401ApplicationProblemPlusJsonAny = deleteJobById401ApplicationProblemPlusJsonAny;
        return this;
    }
    public DeleteJobById404ApplicationProblemPlusJson deleteJobById404ApplicationProblemPlusJsonObject;
    public DeleteJobByIdResponse withDeleteJobById404ApplicationProblemPlusJsonObject(DeleteJobById404ApplicationProblemPlusJson deleteJobById404ApplicationProblemPlusJsonObject) {
        this.deleteJobById404ApplicationProblemPlusJsonObject = deleteJobById404ApplicationProblemPlusJsonObject;
        return this;
    }
    public DeleteJobById409ApplicationProblemPlusJson deleteJobById409ApplicationProblemPlusJsonObject;
    public DeleteJobByIdResponse withDeleteJobById409ApplicationProblemPlusJsonObject(DeleteJobById409ApplicationProblemPlusJson deleteJobById409ApplicationProblemPlusJsonObject) {
        this.deleteJobById409ApplicationProblemPlusJsonObject = deleteJobById409ApplicationProblemPlusJsonObject;
        return this;
    }
    public Long statusCode;
    public DeleteJobByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}