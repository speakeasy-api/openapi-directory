package openapisdk.models.operations;



public class DfareportingFloodlightActivitiesListResponse {
    public String contentType;
    public DfareportingFloodlightActivitiesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FloodlightActivitiesListResponse floodlightActivitiesListResponse;
    public DfareportingFloodlightActivitiesListResponse withFloodlightActivitiesListResponse(openapisdk.models.shared.FloodlightActivitiesListResponse floodlightActivitiesListResponse) {
        this.floodlightActivitiesListResponse = floodlightActivitiesListResponse;
        return this;
    }
    public Long statusCode;
    public DfareportingFloodlightActivitiesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}