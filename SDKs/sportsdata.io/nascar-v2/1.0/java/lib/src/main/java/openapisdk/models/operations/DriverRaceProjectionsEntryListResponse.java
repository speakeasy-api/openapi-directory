package openapisdk.models.operations;



public class DriverRaceProjectionsEntryListResponse {
    public String contentType;
    public DriverRaceProjectionsEntryListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] driverRaceProjections;
    public DriverRaceProjectionsEntryListResponse withDriverRaceProjections(Object[] driverRaceProjections) {
        this.driverRaceProjections = driverRaceProjections;
        return this;
    }
    public Long statusCode;
    public DriverRaceProjectionsEntryListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}