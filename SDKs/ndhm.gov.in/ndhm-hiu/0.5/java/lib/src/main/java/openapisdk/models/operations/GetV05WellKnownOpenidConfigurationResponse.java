package openapisdk.models.operations;



public class GetV05WellKnownOpenidConfigurationResponse {
    public byte[] body;
    public GetV05WellKnownOpenidConfigurationResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetV05WellKnownOpenidConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetV05WellKnownOpenidConfigurationResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public openapisdk.models.shared.OpenIdConfiguration openIdConfiguration;
    public GetV05WellKnownOpenidConfigurationResponse withOpenIdConfiguration(openapisdk.models.shared.OpenIdConfiguration openIdConfiguration) {
        this.openIdConfiguration = openIdConfiguration;
        return this;
    }
    public Long statusCode;
    public GetV05WellKnownOpenidConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}