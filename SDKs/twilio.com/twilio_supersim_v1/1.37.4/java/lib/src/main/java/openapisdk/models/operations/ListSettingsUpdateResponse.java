package openapisdk.models.operations;



public class ListSettingsUpdateResponse {
    public String contentType;
    public ListSettingsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListSettingsUpdateListSettingsUpdateResponse listSettingsUpdateResponse;
    public ListSettingsUpdateResponse withListSettingsUpdateResponse(ListSettingsUpdateListSettingsUpdateResponse listSettingsUpdateResponse) {
        this.listSettingsUpdateResponse = listSettingsUpdateResponse;
        return this;
    }
    public Long statusCode;
    public ListSettingsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}