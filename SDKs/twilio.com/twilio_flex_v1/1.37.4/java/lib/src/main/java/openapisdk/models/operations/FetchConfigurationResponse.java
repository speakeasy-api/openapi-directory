package openapisdk.models.operations;



public class FetchConfigurationResponse {
    public String contentType;
    public FetchConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.FlexV1Configuration flexV1Configuration;
    public FetchConfigurationResponse withFlexV1Configuration(openapisdk.models.shared.FlexV1Configuration flexV1Configuration) {
        this.flexV1Configuration = flexV1Configuration;
        return this;
    }
}