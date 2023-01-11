package openapisdk.models.operations;



public class DfareportingFloodlightActivitiesInsertResponse {
    public String contentType;
    public DfareportingFloodlightActivitiesInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FloodlightActivity floodlightActivity;
    public DfareportingFloodlightActivitiesInsertResponse withFloodlightActivity(openapisdk.models.shared.FloodlightActivity floodlightActivity) {
        this.floodlightActivity = floodlightActivity;
        return this;
    }
    public Long statusCode;
    public DfareportingFloodlightActivitiesInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}