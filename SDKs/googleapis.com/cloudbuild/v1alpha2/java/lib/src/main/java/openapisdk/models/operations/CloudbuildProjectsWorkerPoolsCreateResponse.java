package openapisdk.models.operations;



public class CloudbuildProjectsWorkerPoolsCreateResponse {
    public String contentType;
    public CloudbuildProjectsWorkerPoolsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CloudbuildProjectsWorkerPoolsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.WorkerPool workerPool;
    public CloudbuildProjectsWorkerPoolsCreateResponse withWorkerPool(openapisdk.models.shared.WorkerPool workerPool) {
        this.workerPool = workerPool;
        return this;
    }
}