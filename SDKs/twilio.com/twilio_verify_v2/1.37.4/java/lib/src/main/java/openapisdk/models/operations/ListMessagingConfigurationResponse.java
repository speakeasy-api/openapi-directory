package openapisdk.models.operations;



public class ListMessagingConfigurationResponse {
    public String contentType;
    public ListMessagingConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListMessagingConfigurationListMessagingConfigurationResponse listMessagingConfigurationResponse;
    public ListMessagingConfigurationResponse withListMessagingConfigurationResponse(ListMessagingConfigurationListMessagingConfigurationResponse listMessagingConfigurationResponse) {
        this.listMessagingConfigurationResponse = listMessagingConfigurationResponse;
        return this;
    }
    public Long statusCode;
    public ListMessagingConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}