package openapisdk.models.operations;



public class GetDistrictsByYearResponse {
    public String contentType;
    public GetDistrictsByYearResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DistrictList[] districtLists;
    public GetDistrictsByYearResponse withDistrictLists(openapisdk.models.shared.DistrictList[] districtLists) {
        this.districtLists = districtLists;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetDistrictsByYearResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetDistrictsByYearResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}