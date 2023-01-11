package openapisdk.models.operations;



public class DfareportingFloodlightActivitiesUpdateResponse {
    public String contentType;
    public DfareportingFloodlightActivitiesUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FloodlightActivity floodlightActivity;
    public DfareportingFloodlightActivitiesUpdateResponse withFloodlightActivity(openapisdk.models.shared.FloodlightActivity floodlightActivity) {
        this.floodlightActivity = floodlightActivity;
        return this;
    }
    public Long statusCode;
    public DfareportingFloodlightActivitiesUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}