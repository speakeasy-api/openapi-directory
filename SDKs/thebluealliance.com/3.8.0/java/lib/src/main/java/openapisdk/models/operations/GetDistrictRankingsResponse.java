package openapisdk.models.operations;



public class GetDistrictRankingsResponse {
    public String contentType;
    public GetDistrictRankingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DistrictRanking[] districtRankings;
    public GetDistrictRankingsResponse withDistrictRankings(openapisdk.models.shared.DistrictRanking[] districtRankings) {
        this.districtRankings = districtRankings;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetDistrictRankingsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetDistrictRankingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}