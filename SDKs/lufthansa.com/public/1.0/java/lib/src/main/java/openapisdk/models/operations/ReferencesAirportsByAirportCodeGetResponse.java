package openapisdk.models.operations;



public class ReferencesAirportsByAirportCodeGetResponse {
    public openapisdk.models.shared.AirportResponse airportResponse;
    public ReferencesAirportsByAirportCodeGetResponse withAirportResponse(openapisdk.models.shared.AirportResponse airportResponse) {
        this.airportResponse = airportResponse;
        return this;
    }
    public String contentType;
    public ReferencesAirportsByAirportCodeGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReferencesAirportsByAirportCodeGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}