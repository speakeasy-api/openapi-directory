package openapisdk.models.operations;



public class GetTeamYearsParticipatedResponse {
    public String contentType;
    public GetTeamYearsParticipatedResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetTeamYearsParticipatedResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetTeamYearsParticipatedResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Long[] getTeamYearsParticipated200ApplicationJSONIntegers;
    public GetTeamYearsParticipatedResponse withGetTeamYearsParticipated200ApplicationJsonIntegers(Long[] getTeamYearsParticipated200ApplicationJSONIntegers) {
        this.getTeamYearsParticipated200ApplicationJSONIntegers = getTeamYearsParticipated200ApplicationJSONIntegers;
        return this;
    }
}