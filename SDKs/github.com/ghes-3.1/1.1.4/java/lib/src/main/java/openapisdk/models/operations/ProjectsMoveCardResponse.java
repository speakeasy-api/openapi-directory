package openapisdk.models.operations;



public class ProjectsMoveCardResponse {
    public String contentType;
    public ProjectsMoveCardResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProjectsMoveCardResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ProjectsMoveCardResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public java.util.Map<String, Object> projectsMoveCard201ApplicationJSONObject;
    public ProjectsMoveCardResponse withProjectsMoveCard201ApplicationJsonObject(java.util.Map<String, Object> projectsMoveCard201ApplicationJSONObject) {
        this.projectsMoveCard201ApplicationJSONObject = projectsMoveCard201ApplicationJSONObject;
        return this;
    }
    public ProjectsMoveCard403ApplicationJson projectsMoveCard403ApplicationJSONObject;
    public ProjectsMoveCardResponse withProjectsMoveCard403ApplicationJsonObject(ProjectsMoveCard403ApplicationJson projectsMoveCard403ApplicationJSONObject) {
        this.projectsMoveCard403ApplicationJSONObject = projectsMoveCard403ApplicationJSONObject;
        return this;
    }
    public ProjectsMoveCard503ApplicationJson projectsMoveCard503ApplicationJSONObject;
    public ProjectsMoveCardResponse withProjectsMoveCard503ApplicationJsonObject(ProjectsMoveCard503ApplicationJson projectsMoveCard503ApplicationJSONObject) {
        this.projectsMoveCard503ApplicationJSONObject = projectsMoveCard503ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public ProjectsMoveCardResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}