package openapisdk.models.operations;



public class FetchWorkspaceCumulativeStatisticsResponse {
    public String contentType;
    public FetchWorkspaceCumulativeStatisticsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchWorkspaceCumulativeStatisticsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TaskrouterV1WorkspaceWorkspaceCumulativeStatistics taskrouterV1WorkspaceWorkspaceCumulativeStatistics;
    public FetchWorkspaceCumulativeStatisticsResponse withTaskrouterV1WorkspaceWorkspaceCumulativeStatistics(openapisdk.models.shared.TaskrouterV1WorkspaceWorkspaceCumulativeStatistics taskrouterV1WorkspaceWorkspaceCumulativeStatistics) {
        this.taskrouterV1WorkspaceWorkspaceCumulativeStatistics = taskrouterV1WorkspaceWorkspaceCumulativeStatistics;
        return this;
    }
}