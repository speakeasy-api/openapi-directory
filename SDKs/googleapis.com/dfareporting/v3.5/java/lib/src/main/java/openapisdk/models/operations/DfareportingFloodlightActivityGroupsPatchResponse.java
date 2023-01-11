package openapisdk.models.operations;



public class DfareportingFloodlightActivityGroupsPatchResponse {
    public String contentType;
    public DfareportingFloodlightActivityGroupsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FloodlightActivityGroup floodlightActivityGroup;
    public DfareportingFloodlightActivityGroupsPatchResponse withFloodlightActivityGroup(openapisdk.models.shared.FloodlightActivityGroup floodlightActivityGroup) {
        this.floodlightActivityGroup = floodlightActivityGroup;
        return this;
    }
    public Long statusCode;
    public DfareportingFloodlightActivityGroupsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}