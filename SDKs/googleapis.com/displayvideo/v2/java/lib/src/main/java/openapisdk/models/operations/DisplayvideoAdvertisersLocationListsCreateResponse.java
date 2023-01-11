package openapisdk.models.operations;



public class DisplayvideoAdvertisersLocationListsCreateResponse {
    public String contentType;
    public DisplayvideoAdvertisersLocationListsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LocationList locationList;
    public DisplayvideoAdvertisersLocationListsCreateResponse withLocationList(openapisdk.models.shared.LocationList locationList) {
        this.locationList = locationList;
        return this;
    }
    public Long statusCode;
    public DisplayvideoAdvertisersLocationListsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}