package openapisdk.models.operations;



public class VirtualizationClustersCreateResponse {
    public openapisdk.models.shared.Cluster cluster;
    public VirtualizationClustersCreateResponse withCluster(openapisdk.models.shared.Cluster cluster) {
        this.cluster = cluster;
        return this;
    }
    public String contentType;
    public VirtualizationClustersCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public VirtualizationClustersCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}