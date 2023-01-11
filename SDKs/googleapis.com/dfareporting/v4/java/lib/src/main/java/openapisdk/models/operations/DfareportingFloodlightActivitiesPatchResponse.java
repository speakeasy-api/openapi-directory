package openapisdk.models.operations;



public class DfareportingFloodlightActivitiesPatchResponse {
    public String contentType;
    public DfareportingFloodlightActivitiesPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FloodlightActivity floodlightActivity;
    public DfareportingFloodlightActivitiesPatchResponse withFloodlightActivity(openapisdk.models.shared.FloodlightActivity floodlightActivity) {
        this.floodlightActivity = floodlightActivity;
        return this;
    }
    public Long statusCode;
    public DfareportingFloodlightActivitiesPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}