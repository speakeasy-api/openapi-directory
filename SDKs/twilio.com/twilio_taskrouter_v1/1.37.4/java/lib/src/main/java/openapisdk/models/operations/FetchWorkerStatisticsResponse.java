package openapisdk.models.operations;



public class FetchWorkerStatisticsResponse {
    public String contentType;
    public FetchWorkerStatisticsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchWorkerStatisticsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TaskrouterV1WorkspaceWorkerWorkerStatistics taskrouterV1WorkspaceWorkerWorkerStatistics;
    public FetchWorkerStatisticsResponse withTaskrouterV1WorkspaceWorkerWorkerStatistics(openapisdk.models.shared.TaskrouterV1WorkspaceWorkerWorkerStatistics taskrouterV1WorkspaceWorkerWorkerStatistics) {
        this.taskrouterV1WorkspaceWorkerWorkerStatistics = taskrouterV1WorkspaceWorkerWorkerStatistics;
        return this;
    }
}