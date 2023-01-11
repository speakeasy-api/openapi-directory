package openapisdk.models.operations;



public class DfareportingFloodlightActivityGroupsGetResponse {
    public String contentType;
    public DfareportingFloodlightActivityGroupsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FloodlightActivityGroup floodlightActivityGroup;
    public DfareportingFloodlightActivityGroupsGetResponse withFloodlightActivityGroup(openapisdk.models.shared.FloodlightActivityGroup floodlightActivityGroup) {
        this.floodlightActivityGroup = floodlightActivityGroup;
        return this;
    }
    public Long statusCode;
    public DfareportingFloodlightActivityGroupsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}