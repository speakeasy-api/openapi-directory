package openapisdk.models.operations;



public class GetFeaturesWithinResourceResponse {
    public String contentType;
    public GetFeaturesWithinResourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SequenceFeature[] sequenceFeatures;
    public GetFeaturesWithinResourceResponse withSequenceFeatures(openapisdk.models.shared.SequenceFeature[] sequenceFeatures) {
        this.sequenceFeatures = sequenceFeatures;
        return this;
    }
    public Long statusCode;
    public GetFeaturesWithinResourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}