package openapisdk.models.operations;



public class CloudbuildProjectsLocationsWorkerPoolsGetResponse {
    public String contentType;
    public CloudbuildProjectsLocationsWorkerPoolsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CloudbuildProjectsLocationsWorkerPoolsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.WorkerPool workerPool;
    public CloudbuildProjectsLocationsWorkerPoolsGetResponse withWorkerPool(openapisdk.models.shared.WorkerPool workerPool) {
        this.workerPool = workerPool;
        return this;
    }
}