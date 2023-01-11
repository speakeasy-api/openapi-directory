package openapisdk.models.operations;



public class MybusinesslodgingLocationsUpdateLodgingResponse {
    public String contentType;
    public MybusinesslodgingLocationsUpdateLodgingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Lodging lodging;
    public MybusinesslodgingLocationsUpdateLodgingResponse withLodging(openapisdk.models.shared.Lodging lodging) {
        this.lodging = lodging;
        return this;
    }
    public Long statusCode;
    public MybusinesslodgingLocationsUpdateLodgingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}