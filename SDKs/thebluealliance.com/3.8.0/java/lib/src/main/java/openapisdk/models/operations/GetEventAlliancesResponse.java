package openapisdk.models.operations;



public class GetEventAlliancesResponse {
    public String contentType;
    public GetEventAlliancesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EliminationAlliance[] eliminationAlliances;
    public GetEventAlliancesResponse withEliminationAlliances(openapisdk.models.shared.EliminationAlliance[] eliminationAlliances) {
        this.eliminationAlliances = eliminationAlliances;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetEventAlliancesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetEventAlliancesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}