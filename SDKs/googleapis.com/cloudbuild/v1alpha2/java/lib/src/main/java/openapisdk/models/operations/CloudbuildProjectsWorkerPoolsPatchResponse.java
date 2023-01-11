package openapisdk.models.operations;



public class CloudbuildProjectsWorkerPoolsPatchResponse {
    public String contentType;
    public CloudbuildProjectsWorkerPoolsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CloudbuildProjectsWorkerPoolsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.WorkerPool workerPool;
    public CloudbuildProjectsWorkerPoolsPatchResponse withWorkerPool(openapisdk.models.shared.WorkerPool workerPool) {
        this.workerPool = workerPool;
        return this;
    }
}