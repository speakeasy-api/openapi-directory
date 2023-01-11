package openapisdk.models.operations;



public class ListSupportedCountriesV2Response {
    public String contentType;
    public ListSupportedCountriesV2Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListSupportedCountriesV2Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SupportedCountriesResponseV2 supportedCountriesResponseV2;
    public ListSupportedCountriesV2Response withSupportedCountriesResponseV2(openapisdk.models.shared.SupportedCountriesResponseV2 supportedCountriesResponseV2) {
        this.supportedCountriesResponseV2 = supportedCountriesResponseV2;
        return this;
    }
}