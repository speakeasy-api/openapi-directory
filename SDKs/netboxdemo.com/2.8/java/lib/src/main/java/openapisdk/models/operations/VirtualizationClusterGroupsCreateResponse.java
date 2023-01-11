package openapisdk.models.operations;



public class VirtualizationClusterGroupsCreateResponse {
    public openapisdk.models.shared.ClusterGroup clusterGroup;
    public VirtualizationClusterGroupsCreateResponse withClusterGroup(openapisdk.models.shared.ClusterGroup clusterGroup) {
        this.clusterGroup = clusterGroup;
        return this;
    }
    public String contentType;
    public VirtualizationClusterGroupsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public VirtualizationClusterGroupsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}