package openapisdk.models.operations;



public class TpuProjectsLocationsNodesListResponse {
    public String contentType;
    public TpuProjectsLocationsNodesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListNodesResponse listNodesResponse;
    public TpuProjectsLocationsNodesListResponse withListNodesResponse(openapisdk.models.shared.ListNodesResponse listNodesResponse) {
        this.listNodesResponse = listNodesResponse;
        return this;
    }
    public Long statusCode;
    public TpuProjectsLocationsNodesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}