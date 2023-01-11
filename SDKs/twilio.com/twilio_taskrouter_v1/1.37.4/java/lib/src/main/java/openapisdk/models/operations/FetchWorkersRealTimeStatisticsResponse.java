package openapisdk.models.operations;



public class FetchWorkersRealTimeStatisticsResponse {
    public String contentType;
    public FetchWorkersRealTimeStatisticsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchWorkersRealTimeStatisticsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TaskrouterV1WorkspaceWorkerWorkersRealTimeStatistics taskrouterV1WorkspaceWorkerWorkersRealTimeStatistics;
    public FetchWorkersRealTimeStatisticsResponse withTaskrouterV1WorkspaceWorkerWorkersRealTimeStatistics(openapisdk.models.shared.TaskrouterV1WorkspaceWorkerWorkersRealTimeStatistics taskrouterV1WorkspaceWorkerWorkersRealTimeStatistics) {
        this.taskrouterV1WorkspaceWorkerWorkersRealTimeStatistics = taskrouterV1WorkspaceWorkerWorkersRealTimeStatistics;
        return this;
    }
}