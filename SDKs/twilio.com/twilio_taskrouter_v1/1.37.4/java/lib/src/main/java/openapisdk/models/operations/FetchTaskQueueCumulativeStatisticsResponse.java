package openapisdk.models.operations;



public class FetchTaskQueueCumulativeStatisticsResponse {
    public String contentType;
    public FetchTaskQueueCumulativeStatisticsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchTaskQueueCumulativeStatisticsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TaskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics taskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics;
    public FetchTaskQueueCumulativeStatisticsResponse withTaskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics(openapisdk.models.shared.TaskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics taskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics) {
        this.taskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics = taskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics;
        return this;
    }
}