package openapisdk.models.operations;



public class FetchWorkersCumulativeStatisticsResponse {
    public String contentType;
    public FetchWorkersCumulativeStatisticsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchWorkersCumulativeStatisticsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TaskrouterV1WorkspaceWorkerWorkersCumulativeStatistics taskrouterV1WorkspaceWorkerWorkersCumulativeStatistics;
    public FetchWorkersCumulativeStatisticsResponse withTaskrouterV1WorkspaceWorkerWorkersCumulativeStatistics(openapisdk.models.shared.TaskrouterV1WorkspaceWorkerWorkersCumulativeStatistics taskrouterV1WorkspaceWorkerWorkersCumulativeStatistics) {
        this.taskrouterV1WorkspaceWorkerWorkersCumulativeStatistics = taskrouterV1WorkspaceWorkerWorkersCumulativeStatistics;
        return this;
    }
}