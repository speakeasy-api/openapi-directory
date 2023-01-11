package openapisdk.models.operations;



public class CloudbuildProjectsWorkerPoolsGetResponse {
    public String contentType;
    public CloudbuildProjectsWorkerPoolsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CloudbuildProjectsWorkerPoolsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.WorkerPool workerPool;
    public CloudbuildProjectsWorkerPoolsGetResponse withWorkerPool(openapisdk.models.shared.WorkerPool workerPool) {
        this.workerPool = workerPool;
        return this;
    }
}