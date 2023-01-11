package openapisdk.models.operations;



public class VirtualizationClusterGroupsReadResponse {
    public openapisdk.models.shared.ClusterGroup clusterGroup;
    public VirtualizationClusterGroupsReadResponse withClusterGroup(openapisdk.models.shared.ClusterGroup clusterGroup) {
        this.clusterGroup = clusterGroup;
        return this;
    }
    public String contentType;
    public VirtualizationClusterGroupsReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public VirtualizationClusterGroupsReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}