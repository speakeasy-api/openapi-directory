package openapisdk.models.operations;



public class ExtrasTopologyMapsUpdateResponse {
    public String contentType;
    public ExtrasTopologyMapsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ExtrasTopologyMapsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TopologyMap topologyMap;
    public ExtrasTopologyMapsUpdateResponse withTopologyMap(openapisdk.models.shared.TopologyMap topologyMap) {
        this.topologyMap = topologyMap;
        return this;
    }
}