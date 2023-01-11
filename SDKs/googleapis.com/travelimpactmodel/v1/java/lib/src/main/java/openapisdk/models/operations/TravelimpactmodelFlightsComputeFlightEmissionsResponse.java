package openapisdk.models.operations;



public class TravelimpactmodelFlightsComputeFlightEmissionsResponse {
    public openapisdk.models.shared.ComputeFlightEmissionsResponse computeFlightEmissionsResponse;
    public TravelimpactmodelFlightsComputeFlightEmissionsResponse withComputeFlightEmissionsResponse(openapisdk.models.shared.ComputeFlightEmissionsResponse computeFlightEmissionsResponse) {
        this.computeFlightEmissionsResponse = computeFlightEmissionsResponse;
        return this;
    }
    public String contentType;
    public TravelimpactmodelFlightsComputeFlightEmissionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TravelimpactmodelFlightsComputeFlightEmissionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}