package openapisdk.models.operations;



public class VirtualizationClusterTypesCreateResponse {
    public openapisdk.models.shared.ClusterType clusterType;
    public VirtualizationClusterTypesCreateResponse withClusterType(openapisdk.models.shared.ClusterType clusterType) {
        this.clusterType = clusterType;
        return this;
    }
    public String contentType;
    public VirtualizationClusterTypesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public VirtualizationClusterTypesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}