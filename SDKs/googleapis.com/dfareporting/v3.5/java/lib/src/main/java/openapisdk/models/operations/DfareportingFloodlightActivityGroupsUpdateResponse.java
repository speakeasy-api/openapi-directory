package openapisdk.models.operations;



public class DfareportingFloodlightActivityGroupsUpdateResponse {
    public String contentType;
    public DfareportingFloodlightActivityGroupsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FloodlightActivityGroup floodlightActivityGroup;
    public DfareportingFloodlightActivityGroupsUpdateResponse withFloodlightActivityGroup(openapisdk.models.shared.FloodlightActivityGroup floodlightActivityGroup) {
        this.floodlightActivityGroup = floodlightActivityGroup;
        return this;
    }
    public Long statusCode;
    public DfareportingFloodlightActivityGroupsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}