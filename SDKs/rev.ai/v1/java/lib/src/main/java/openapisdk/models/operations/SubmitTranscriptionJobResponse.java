package openapisdk.models.operations;



public class SubmitTranscriptionJobResponse {
    public String contentType;
    public SubmitTranscriptionJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Job job;
    public SubmitTranscriptionJobResponse withJob(openapisdk.models.shared.Job job) {
        this.job = job;
        return this;
    }
    public Long statusCode;
    public SubmitTranscriptionJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public SubmitTranscriptionJob400ApplicationProblemPlusJson submitTranscriptionJob400ApplicationProblemPlusJsonObject;
    public SubmitTranscriptionJobResponse withSubmitTranscriptionJob400ApplicationProblemPlusJsonObject(SubmitTranscriptionJob400ApplicationProblemPlusJson submitTranscriptionJob400ApplicationProblemPlusJsonObject) {
        this.submitTranscriptionJob400ApplicationProblemPlusJsonObject = submitTranscriptionJob400ApplicationProblemPlusJsonObject;
        return this;
    }
    public Object submitTranscriptionJob401ApplicationProblemPlusJsonAny;
    public SubmitTranscriptionJobResponse withSubmitTranscriptionJob401ApplicationProblemPlusJsonAny(Object submitTranscriptionJob401ApplicationProblemPlusJsonAny) {
        this.submitTranscriptionJob401ApplicationProblemPlusJsonAny = submitTranscriptionJob401ApplicationProblemPlusJsonAny;
        return this;
    }
    public Object submitTranscriptionJob413ApplicationProblemPlusJsonAny;
    public SubmitTranscriptionJobResponse withSubmitTranscriptionJob413ApplicationProblemPlusJsonAny(Object submitTranscriptionJob413ApplicationProblemPlusJsonAny) {
        this.submitTranscriptionJob413ApplicationProblemPlusJsonAny = submitTranscriptionJob413ApplicationProblemPlusJsonAny;
        return this;
    }
}