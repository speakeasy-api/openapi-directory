package openapisdk.models.operations;



public class GetSpotSetByIdResponse {
    public String contentType;
    public GetSpotSetByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SpotSet spotSet;
    public GetSpotSetByIdResponse withSpotSet(openapisdk.models.shared.SpotSet spotSet) {
        this.spotSet = spotSet;
        return this;
    }
    public Long statusCode;
    public GetSpotSetByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}