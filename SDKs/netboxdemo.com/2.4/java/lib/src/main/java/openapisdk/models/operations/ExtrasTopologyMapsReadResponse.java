package openapisdk.models.operations;



public class ExtrasTopologyMapsReadResponse {
    public String contentType;
    public ExtrasTopologyMapsReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ExtrasTopologyMapsReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TopologyMap topologyMap;
    public ExtrasTopologyMapsReadResponse withTopologyMap(openapisdk.models.shared.TopologyMap topologyMap) {
        this.topologyMap = topologyMap;
        return this;
    }
}