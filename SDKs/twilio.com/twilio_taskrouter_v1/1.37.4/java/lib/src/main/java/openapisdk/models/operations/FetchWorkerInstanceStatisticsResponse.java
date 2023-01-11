package openapisdk.models.operations;



public class FetchWorkerInstanceStatisticsResponse {
    public String contentType;
    public FetchWorkerInstanceStatisticsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchWorkerInstanceStatisticsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TaskrouterV1WorkspaceWorkerWorkerInstanceStatistics taskrouterV1WorkspaceWorkerWorkerInstanceStatistics;
    public FetchWorkerInstanceStatisticsResponse withTaskrouterV1WorkspaceWorkerWorkerInstanceStatistics(openapisdk.models.shared.TaskrouterV1WorkspaceWorkerWorkerInstanceStatistics taskrouterV1WorkspaceWorkerWorkerInstanceStatistics) {
        this.taskrouterV1WorkspaceWorkerWorkerInstanceStatistics = taskrouterV1WorkspaceWorkerWorkerInstanceStatistics;
        return this;
    }
}