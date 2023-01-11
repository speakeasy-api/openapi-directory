package openapisdk.models.operations;



public class VirtualizationClusterGroupsUpdateResponse {
    public openapisdk.models.shared.ClusterGroup clusterGroup;
    public VirtualizationClusterGroupsUpdateResponse withClusterGroup(openapisdk.models.shared.ClusterGroup clusterGroup) {
        this.clusterGroup = clusterGroup;
        return this;
    }
    public String contentType;
    public VirtualizationClusterGroupsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public VirtualizationClusterGroupsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}