package openapisdk.models.operations;



public class VirtualizationClusterTypesReadResponse {
    public openapisdk.models.shared.ClusterType clusterType;
    public VirtualizationClusterTypesReadResponse withClusterType(openapisdk.models.shared.ClusterType clusterType) {
        this.clusterType = clusterType;
        return this;
    }
    public String contentType;
    public VirtualizationClusterTypesReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public VirtualizationClusterTypesReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}