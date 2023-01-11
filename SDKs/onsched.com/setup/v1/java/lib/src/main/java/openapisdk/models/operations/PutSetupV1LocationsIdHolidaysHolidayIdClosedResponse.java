package openapisdk.models.operations;



public class PutSetupV1LocationsIdHolidaysHolidayIdClosedResponse {
    public String contentType;
    public PutSetupV1LocationsIdHolidaysHolidayIdClosedResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LocationViewModel locationViewModel;
    public PutSetupV1LocationsIdHolidaysHolidayIdClosedResponse withLocationViewModel(openapisdk.models.shared.LocationViewModel locationViewModel) {
        this.locationViewModel = locationViewModel;
        return this;
    }
    public Long statusCode;
    public PutSetupV1LocationsIdHolidaysHolidayIdClosedResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}