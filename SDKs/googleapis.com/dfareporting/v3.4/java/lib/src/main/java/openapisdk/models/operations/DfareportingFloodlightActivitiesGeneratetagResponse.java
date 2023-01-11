package openapisdk.models.operations;



public class DfareportingFloodlightActivitiesGeneratetagResponse {
    public String contentType;
    public DfareportingFloodlightActivitiesGeneratetagResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FloodlightActivitiesGenerateTagResponse floodlightActivitiesGenerateTagResponse;
    public DfareportingFloodlightActivitiesGeneratetagResponse withFloodlightActivitiesGenerateTagResponse(openapisdk.models.shared.FloodlightActivitiesGenerateTagResponse floodlightActivitiesGenerateTagResponse) {
        this.floodlightActivitiesGenerateTagResponse = floodlightActivitiesGenerateTagResponse;
        return this;
    }
    public Long statusCode;
    public DfareportingFloodlightActivitiesGeneratetagResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}