package openapisdk.models.operations;



public class UpdateSampleResponse {
    public String contentType;
    public UpdateSampleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateSampleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.AutopilotV1AssistantTaskSample autopilotV1AssistantTaskSample;
    public UpdateSampleResponse withAutopilotV1AssistantTaskSample(openapisdk.models.shared.AutopilotV1AssistantTaskSample autopilotV1AssistantTaskSample) {
        this.autopilotV1AssistantTaskSample = autopilotV1AssistantTaskSample;
        return this;
    }
}