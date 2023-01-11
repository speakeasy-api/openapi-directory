package openapisdk.models.operations;



public class GetSpotsetsResponse {
    public String contentType;
    public GetSpotsetsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SpotSet spotSet;
    public GetSpotsetsResponse withSpotSet(openapisdk.models.shared.SpotSet spotSet) {
        this.spotSet = spotSet;
        return this;
    }
    public Long statusCode;
    public GetSpotsetsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}