package openapisdk.models.operations;



public class DisplayvideoAdvertisersLocationListsPatchResponse {
    public String contentType;
    public DisplayvideoAdvertisersLocationListsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LocationList locationList;
    public DisplayvideoAdvertisersLocationListsPatchResponse withLocationList(openapisdk.models.shared.LocationList locationList) {
        this.locationList = locationList;
        return this;
    }
    public Long statusCode;
    public DisplayvideoAdvertisersLocationListsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}