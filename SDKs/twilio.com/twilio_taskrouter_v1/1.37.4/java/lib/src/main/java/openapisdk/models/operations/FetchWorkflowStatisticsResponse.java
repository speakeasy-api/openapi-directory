package openapisdk.models.operations;



public class FetchWorkflowStatisticsResponse {
    public String contentType;
    public FetchWorkflowStatisticsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchWorkflowStatisticsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TaskrouterV1WorkspaceWorkflowWorkflowStatistics taskrouterV1WorkspaceWorkflowWorkflowStatistics;
    public FetchWorkflowStatisticsResponse withTaskrouterV1WorkspaceWorkflowWorkflowStatistics(openapisdk.models.shared.TaskrouterV1WorkspaceWorkflowWorkflowStatistics taskrouterV1WorkspaceWorkflowWorkflowStatistics) {
        this.taskrouterV1WorkspaceWorkflowWorkflowStatistics = taskrouterV1WorkspaceWorkflowWorkflowStatistics;
        return this;
    }
}