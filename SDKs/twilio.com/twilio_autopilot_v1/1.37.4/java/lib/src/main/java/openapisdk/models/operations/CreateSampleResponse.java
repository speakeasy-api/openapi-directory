package openapisdk.models.operations;



public class CreateSampleResponse {
    public String contentType;
    public CreateSampleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateSampleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.AutopilotV1AssistantTaskSample autopilotV1AssistantTaskSample;
    public CreateSampleResponse withAutopilotV1AssistantTaskSample(openapisdk.models.shared.AutopilotV1AssistantTaskSample autopilotV1AssistantTaskSample) {
        this.autopilotV1AssistantTaskSample = autopilotV1AssistantTaskSample;
        return this;
    }
}