package openapisdk.models.operations;



public class GetSpotListByIdResponse {
    public String contentType;
    public GetSpotListByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SpotList spotList;
    public GetSpotListByIdResponse withSpotList(openapisdk.models.shared.SpotList spotList) {
        this.spotList = spotList;
        return this;
    }
    public Long statusCode;
    public GetSpotListByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}