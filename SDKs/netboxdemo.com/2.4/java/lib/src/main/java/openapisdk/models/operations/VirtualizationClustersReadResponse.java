package openapisdk.models.operations;



public class VirtualizationClustersReadResponse {
    public openapisdk.models.shared.Cluster cluster;
    public VirtualizationClustersReadResponse withCluster(openapisdk.models.shared.Cluster cluster) {
        this.cluster = cluster;
        return this;
    }
    public String contentType;
    public VirtualizationClustersReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public VirtualizationClustersReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}