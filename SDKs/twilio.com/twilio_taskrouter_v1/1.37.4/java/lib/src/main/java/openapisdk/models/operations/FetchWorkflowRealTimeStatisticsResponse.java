package openapisdk.models.operations;



public class FetchWorkflowRealTimeStatisticsResponse {
    public String contentType;
    public FetchWorkflowRealTimeStatisticsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchWorkflowRealTimeStatisticsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TaskrouterV1WorkspaceWorkflowWorkflowRealTimeStatistics taskrouterV1WorkspaceWorkflowWorkflowRealTimeStatistics;
    public FetchWorkflowRealTimeStatisticsResponse withTaskrouterV1WorkspaceWorkflowWorkflowRealTimeStatistics(openapisdk.models.shared.TaskrouterV1WorkspaceWorkflowWorkflowRealTimeStatistics taskrouterV1WorkspaceWorkflowWorkflowRealTimeStatistics) {
        this.taskrouterV1WorkspaceWorkflowWorkflowRealTimeStatistics = taskrouterV1WorkspaceWorkflowWorkflowRealTimeStatistics;
        return this;
    }
}