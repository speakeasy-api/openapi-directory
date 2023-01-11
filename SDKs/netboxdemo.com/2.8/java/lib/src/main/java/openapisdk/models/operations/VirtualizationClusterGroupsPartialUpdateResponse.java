package openapisdk.models.operations;



public class VirtualizationClusterGroupsPartialUpdateResponse {
    public openapisdk.models.shared.ClusterGroup clusterGroup;
    public VirtualizationClusterGroupsPartialUpdateResponse withClusterGroup(openapisdk.models.shared.ClusterGroup clusterGroup) {
        this.clusterGroup = clusterGroup;
        return this;
    }
    public String contentType;
    public VirtualizationClusterGroupsPartialUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public VirtualizationClusterGroupsPartialUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}