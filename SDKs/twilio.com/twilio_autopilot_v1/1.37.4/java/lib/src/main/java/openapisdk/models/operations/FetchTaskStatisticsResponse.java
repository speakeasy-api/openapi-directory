package openapisdk.models.operations;



public class FetchTaskStatisticsResponse {
    public String contentType;
    public FetchTaskStatisticsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchTaskStatisticsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.AutopilotV1AssistantTaskTaskStatistics autopilotV1AssistantTaskTaskStatistics;
    public FetchTaskStatisticsResponse withAutopilotV1AssistantTaskTaskStatistics(openapisdk.models.shared.AutopilotV1AssistantTaskTaskStatistics autopilotV1AssistantTaskTaskStatistics) {
        this.autopilotV1AssistantTaskTaskStatistics = autopilotV1AssistantTaskTaskStatistics;
        return this;
    }
}