package openapisdk.models.operations;



public class CloudtasksProjectsLocationsQueuesTasksBufferResponse {
    public openapisdk.models.shared.BufferTaskResponse bufferTaskResponse;
    public CloudtasksProjectsLocationsQueuesTasksBufferResponse withBufferTaskResponse(openapisdk.models.shared.BufferTaskResponse bufferTaskResponse) {
        this.bufferTaskResponse = bufferTaskResponse;
        return this;
    }
    public String contentType;
    public CloudtasksProjectsLocationsQueuesTasksBufferResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CloudtasksProjectsLocationsQueuesTasksBufferResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}