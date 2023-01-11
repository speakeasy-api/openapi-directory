package openapisdk.models.operations;



public class GetTeamDistrictsResponse {
    public String contentType;
    public GetTeamDistrictsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DistrictList[] districtLists;
    public GetTeamDistrictsResponse withDistrictLists(openapisdk.models.shared.DistrictList[] districtLists) {
        this.districtLists = districtLists;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetTeamDistrictsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetTeamDistrictsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}