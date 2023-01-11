package openapisdk.models.operations;



public class DfareportingFloodlightActivityGroupsInsertResponse {
    public String contentType;
    public DfareportingFloodlightActivityGroupsInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FloodlightActivityGroup floodlightActivityGroup;
    public DfareportingFloodlightActivityGroupsInsertResponse withFloodlightActivityGroup(openapisdk.models.shared.FloodlightActivityGroup floodlightActivityGroup) {
        this.floodlightActivityGroup = floodlightActivityGroup;
        return this;
    }
    public Long statusCode;
    public DfareportingFloodlightActivityGroupsInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}