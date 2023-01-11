package openapisdk.models.operations;



public class GetSpotsetsIdResponse {
    public String contentType;
    public GetSpotsetsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SpotSet spotSet;
    public GetSpotsetsIdResponse withSpotSet(openapisdk.models.shared.SpotSet spotSet) {
        this.spotSet = spotSet;
        return this;
    }
    public Long statusCode;
    public GetSpotsetsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}