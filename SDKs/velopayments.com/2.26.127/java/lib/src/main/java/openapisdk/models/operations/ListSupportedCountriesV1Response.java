package openapisdk.models.operations;



public class ListSupportedCountriesV1Response {
    public String contentType;
    public ListSupportedCountriesV1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListSupportedCountriesV1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SupportedCountriesResponse supportedCountriesResponse;
    public ListSupportedCountriesV1Response withSupportedCountriesResponse(openapisdk.models.shared.SupportedCountriesResponse supportedCountriesResponse) {
        this.supportedCountriesResponse = supportedCountriesResponse;
        return this;
    }
}