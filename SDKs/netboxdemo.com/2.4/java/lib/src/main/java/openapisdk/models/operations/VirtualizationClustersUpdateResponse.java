package openapisdk.models.operations;



public class VirtualizationClustersUpdateResponse {
    public openapisdk.models.shared.Cluster cluster;
    public VirtualizationClustersUpdateResponse withCluster(openapisdk.models.shared.Cluster cluster) {
        this.cluster = cluster;
        return this;
    }
    public String contentType;
    public VirtualizationClustersUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public VirtualizationClustersUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}