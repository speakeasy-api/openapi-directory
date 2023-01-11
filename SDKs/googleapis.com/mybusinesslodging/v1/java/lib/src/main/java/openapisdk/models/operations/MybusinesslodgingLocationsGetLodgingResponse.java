package openapisdk.models.operations;



public class MybusinesslodgingLocationsGetLodgingResponse {
    public String contentType;
    public MybusinesslodgingLocationsGetLodgingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Lodging lodging;
    public MybusinesslodgingLocationsGetLodgingResponse withLodging(openapisdk.models.shared.Lodging lodging) {
        this.lodging = lodging;
        return this;
    }
    public Long statusCode;
    public MybusinesslodgingLocationsGetLodgingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}