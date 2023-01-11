package openapisdk.models.operations;



public class CitiesDrillersListResponse {
    public openapisdk.models.shared.CityList[] cityLists;
    public CitiesDrillersListResponse withCityLists(openapisdk.models.shared.CityList[] cityLists) {
        this.cityLists = cityLists;
        return this;
    }
    public String contentType;
    public CitiesDrillersListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CitiesDrillersListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}