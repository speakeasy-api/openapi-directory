package openapisdk.models.operations;



public class DiscoveryReceivesResponse {
    public String contentType;
    public DiscoveryReceivesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DiscoveredParticipant discoveredParticipant;
    public DiscoveryReceivesResponse withDiscoveredParticipant(openapisdk.models.shared.DiscoveredParticipant discoveredParticipant) {
        this.discoveredParticipant = discoveredParticipant;
        return this;
    }
    public Object[] errorModels;
    public DiscoveryReceivesResponse withErrorModels(Object[] errorModels) {
        this.errorModels = errorModels;
        return this;
    }
    public Long statusCode;
    public DiscoveryReceivesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}