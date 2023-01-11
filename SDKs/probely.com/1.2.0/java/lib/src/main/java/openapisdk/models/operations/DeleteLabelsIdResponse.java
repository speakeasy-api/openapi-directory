package openapisdk.models.operations;



public class DeleteLabelsIdResponse {
    public String contentType;
    public DeleteLabelsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeleteLabelsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DeleteLabelsId401ApplicationJson deleteLabelsId401ApplicationJSONObject;
    public DeleteLabelsIdResponse withDeleteLabelsId401ApplicationJsonObject(DeleteLabelsId401ApplicationJson deleteLabelsId401ApplicationJSONObject) {
        this.deleteLabelsId401ApplicationJSONObject = deleteLabelsId401ApplicationJSONObject;
        return this;
    }
}