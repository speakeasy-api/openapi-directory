package openapisdk.models.operations;



public class CitiesInstallersListResponse {
    public openapisdk.models.shared.CityList[] cityLists;
    public CitiesInstallersListResponse withCityLists(openapisdk.models.shared.CityList[] cityLists) {
        this.cityLists = cityLists;
        return this;
    }
    public String contentType;
    public CitiesInstallersListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CitiesInstallersListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}