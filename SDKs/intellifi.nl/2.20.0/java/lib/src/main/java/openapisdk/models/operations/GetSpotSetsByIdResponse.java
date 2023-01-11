package openapisdk.models.operations;



public class GetSpotSetsByIdResponse {
    public String contentType;
    public GetSpotSetsByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SpotSet spotSet;
    public GetSpotSetsByIdResponse withSpotSet(openapisdk.models.shared.SpotSet spotSet) {
        this.spotSet = spotSet;
        return this;
    }
    public Long statusCode;
    public GetSpotSetsByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}