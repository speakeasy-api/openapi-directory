package openapisdk.models.operations;



public class ProcessesListResponse {
    public String contentType;
    public ProcessesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Process process;
    public ProcessesListResponse withProcess(openapisdk.models.shared.Process process) {
        this.process = process;
        return this;
    }
    public Long statusCode;
    public ProcessesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}