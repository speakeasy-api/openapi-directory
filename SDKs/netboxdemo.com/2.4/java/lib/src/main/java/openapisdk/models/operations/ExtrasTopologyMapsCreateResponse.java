package openapisdk.models.operations;



public class ExtrasTopologyMapsCreateResponse {
    public String contentType;
    public ExtrasTopologyMapsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ExtrasTopologyMapsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TopologyMap topologyMap;
    public ExtrasTopologyMapsCreateResponse withTopologyMap(openapisdk.models.shared.TopologyMap topologyMap) {
        this.topologyMap = topologyMap;
        return this;
    }
}