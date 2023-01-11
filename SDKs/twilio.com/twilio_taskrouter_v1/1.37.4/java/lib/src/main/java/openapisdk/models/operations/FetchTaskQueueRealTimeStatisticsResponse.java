package openapisdk.models.operations;



public class FetchTaskQueueRealTimeStatisticsResponse {
    public String contentType;
    public FetchTaskQueueRealTimeStatisticsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchTaskQueueRealTimeStatisticsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TaskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatistics taskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatistics;
    public FetchTaskQueueRealTimeStatisticsResponse withTaskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatistics(openapisdk.models.shared.TaskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatistics taskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatistics) {
        this.taskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatistics = taskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatistics;
        return this;
    }
}