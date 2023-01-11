package openapisdk.models.operations;



public class FetchWorkspaceStatisticsResponse {
    public String contentType;
    public FetchWorkspaceStatisticsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchWorkspaceStatisticsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TaskrouterV1WorkspaceWorkspaceStatistics taskrouterV1WorkspaceWorkspaceStatistics;
    public FetchWorkspaceStatisticsResponse withTaskrouterV1WorkspaceWorkspaceStatistics(openapisdk.models.shared.TaskrouterV1WorkspaceWorkspaceStatistics taskrouterV1WorkspaceWorkspaceStatistics) {
        this.taskrouterV1WorkspaceWorkspaceStatistics = taskrouterV1WorkspaceWorkspaceStatistics;
        return this;
    }
}