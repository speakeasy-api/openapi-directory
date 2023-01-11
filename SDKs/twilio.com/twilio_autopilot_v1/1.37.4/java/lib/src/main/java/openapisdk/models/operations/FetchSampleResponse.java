package openapisdk.models.operations;



public class FetchSampleResponse {
    public String contentType;
    public FetchSampleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchSampleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.AutopilotV1AssistantTaskSample autopilotV1AssistantTaskSample;
    public FetchSampleResponse withAutopilotV1AssistantTaskSample(openapisdk.models.shared.AutopilotV1AssistantTaskSample autopilotV1AssistantTaskSample) {
        this.autopilotV1AssistantTaskSample = autopilotV1AssistantTaskSample;
        return this;
    }
}