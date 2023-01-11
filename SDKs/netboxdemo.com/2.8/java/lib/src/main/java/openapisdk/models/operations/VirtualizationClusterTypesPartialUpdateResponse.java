package openapisdk.models.operations;



public class VirtualizationClusterTypesPartialUpdateResponse {
    public openapisdk.models.shared.ClusterType clusterType;
    public VirtualizationClusterTypesPartialUpdateResponse withClusterType(openapisdk.models.shared.ClusterType clusterType) {
        this.clusterType = clusterType;
        return this;
    }
    public String contentType;
    public VirtualizationClusterTypesPartialUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public VirtualizationClusterTypesPartialUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}