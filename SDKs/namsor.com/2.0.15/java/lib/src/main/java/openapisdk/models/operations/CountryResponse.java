package openapisdk.models.operations;



public class CountryResponse {
    public String contentType;
    public CountryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PersonalNameGeoOut personalNameGeoOut;
    public CountryResponse withPersonalNameGeoOut(openapisdk.models.shared.PersonalNameGeoOut personalNameGeoOut) {
        this.personalNameGeoOut = personalNameGeoOut;
        return this;
    }
    public Long statusCode;
    public CountryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}