package openapisdk.models.operations;



public class VirtualizationClusterTypesUpdateResponse {
    public openapisdk.models.shared.ClusterType clusterType;
    public VirtualizationClusterTypesUpdateResponse withClusterType(openapisdk.models.shared.ClusterType clusterType) {
        this.clusterType = clusterType;
        return this;
    }
    public String contentType;
    public VirtualizationClusterTypesUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public VirtualizationClusterTypesUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}