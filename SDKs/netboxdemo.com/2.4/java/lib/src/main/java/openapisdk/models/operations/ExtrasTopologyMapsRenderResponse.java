package openapisdk.models.operations;



public class ExtrasTopologyMapsRenderResponse {
    public String contentType;
    public ExtrasTopologyMapsRenderResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ExtrasTopologyMapsRenderResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TopologyMap topologyMap;
    public ExtrasTopologyMapsRenderResponse withTopologyMap(openapisdk.models.shared.TopologyMap topologyMap) {
        this.topologyMap = topologyMap;
        return this;
    }
}