package openapisdk.models.operations;



public class DfareportingFloodlightActivitiesGetResponse {
    public String contentType;
    public DfareportingFloodlightActivitiesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FloodlightActivity floodlightActivity;
    public DfareportingFloodlightActivitiesGetResponse withFloodlightActivity(openapisdk.models.shared.FloodlightActivity floodlightActivity) {
        this.floodlightActivity = floodlightActivity;
        return this;
    }
    public Long statusCode;
    public DfareportingFloodlightActivitiesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}