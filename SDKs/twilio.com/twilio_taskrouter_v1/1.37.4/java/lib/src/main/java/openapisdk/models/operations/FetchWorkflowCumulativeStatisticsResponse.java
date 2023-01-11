package openapisdk.models.operations;



public class FetchWorkflowCumulativeStatisticsResponse {
    public String contentType;
    public FetchWorkflowCumulativeStatisticsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchWorkflowCumulativeStatisticsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TaskrouterV1WorkspaceWorkflowWorkflowCumulativeStatistics taskrouterV1WorkspaceWorkflowWorkflowCumulativeStatistics;
    public FetchWorkflowCumulativeStatisticsResponse withTaskrouterV1WorkspaceWorkflowWorkflowCumulativeStatistics(openapisdk.models.shared.TaskrouterV1WorkspaceWorkflowWorkflowCumulativeStatistics taskrouterV1WorkspaceWorkflowWorkflowCumulativeStatistics) {
        this.taskrouterV1WorkspaceWorkflowWorkflowCumulativeStatistics = taskrouterV1WorkspaceWorkflowWorkflowCumulativeStatistics;
        return this;
    }
}