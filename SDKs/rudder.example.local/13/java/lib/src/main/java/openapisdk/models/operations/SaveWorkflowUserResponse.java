package openapisdk.models.operations;



public class SaveWorkflowUserResponse {
    public String contentType;
    public SaveWorkflowUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SaveWorkflowUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public SaveWorkflowUser200ApplicationJson saveWorkflowUser200ApplicationJSONObject;
    public SaveWorkflowUserResponse withSaveWorkflowUser200ApplicationJsonObject(SaveWorkflowUser200ApplicationJson saveWorkflowUser200ApplicationJSONObject) {
        this.saveWorkflowUser200ApplicationJSONObject = saveWorkflowUser200ApplicationJSONObject;
        return this;
    }
}