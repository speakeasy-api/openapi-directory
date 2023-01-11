package openapisdk.models.operations;



public class FetchWorkspaceRealTimeStatisticsResponse {
    public String contentType;
    public FetchWorkspaceRealTimeStatisticsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchWorkspaceRealTimeStatisticsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TaskrouterV1WorkspaceWorkspaceRealTimeStatistics taskrouterV1WorkspaceWorkspaceRealTimeStatistics;
    public FetchWorkspaceRealTimeStatisticsResponse withTaskrouterV1WorkspaceWorkspaceRealTimeStatistics(openapisdk.models.shared.TaskrouterV1WorkspaceWorkspaceRealTimeStatistics taskrouterV1WorkspaceWorkspaceRealTimeStatistics) {
        this.taskrouterV1WorkspaceWorkspaceRealTimeStatistics = taskrouterV1WorkspaceWorkspaceRealTimeStatistics;
        return this;
    }
}