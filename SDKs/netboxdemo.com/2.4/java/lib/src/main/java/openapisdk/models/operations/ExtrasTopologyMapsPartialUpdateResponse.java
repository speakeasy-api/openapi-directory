package openapisdk.models.operations;



public class ExtrasTopologyMapsPartialUpdateResponse {
    public String contentType;
    public ExtrasTopologyMapsPartialUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ExtrasTopologyMapsPartialUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TopologyMap topologyMap;
    public ExtrasTopologyMapsPartialUpdateResponse withTopologyMap(openapisdk.models.shared.TopologyMap topologyMap) {
        this.topologyMap = topologyMap;
        return this;
    }
}