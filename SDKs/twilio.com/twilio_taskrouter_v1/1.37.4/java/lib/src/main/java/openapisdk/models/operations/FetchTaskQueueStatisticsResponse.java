package openapisdk.models.operations;



public class FetchTaskQueueStatisticsResponse {
    public String contentType;
    public FetchTaskQueueStatisticsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchTaskQueueStatisticsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TaskrouterV1WorkspaceTaskQueueTaskQueueStatistics taskrouterV1WorkspaceTaskQueueTaskQueueStatistics;
    public FetchTaskQueueStatisticsResponse withTaskrouterV1WorkspaceTaskQueueTaskQueueStatistics(openapisdk.models.shared.TaskrouterV1WorkspaceTaskQueueTaskQueueStatistics taskrouterV1WorkspaceTaskQueueTaskQueueStatistics) {
        this.taskrouterV1WorkspaceTaskQueueTaskQueueStatistics = taskrouterV1WorkspaceTaskQueueTaskQueueStatistics;
        return this;
    }
}