package openapisdk.models.operations;



public class DfareportingFloodlightActivityGroupsListResponse {
    public String contentType;
    public DfareportingFloodlightActivityGroupsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FloodlightActivityGroupsListResponse floodlightActivityGroupsListResponse;
    public DfareportingFloodlightActivityGroupsListResponse withFloodlightActivityGroupsListResponse(openapisdk.models.shared.FloodlightActivityGroupsListResponse floodlightActivityGroupsListResponse) {
        this.floodlightActivityGroupsListResponse = floodlightActivityGroupsListResponse;
        return this;
    }
    public Long statusCode;
    public DfareportingFloodlightActivityGroupsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}