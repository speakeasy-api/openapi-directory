package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TravelimpactmodelFlightsComputeFlightEmissionsRequest {
    public TravelimpactmodelFlightsComputeFlightEmissionsQueryParams queryParams;
    public TravelimpactmodelFlightsComputeFlightEmissionsRequest withQueryParams(TravelimpactmodelFlightsComputeFlightEmissionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ComputeFlightEmissionsRequest request;
    public TravelimpactmodelFlightsComputeFlightEmissionsRequest withRequest(openapisdk.models.shared.ComputeFlightEmissionsRequest request) {
        this.request = request;
        return this;
    }
}