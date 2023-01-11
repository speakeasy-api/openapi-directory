package openapisdk.models.operations;



public class VirtualizationClustersPartialUpdateResponse {
    public openapisdk.models.shared.Cluster cluster;
    public VirtualizationClustersPartialUpdateResponse withCluster(openapisdk.models.shared.Cluster cluster) {
        this.cluster = cluster;
        return this;
    }
    public String contentType;
    public VirtualizationClustersPartialUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public VirtualizationClustersPartialUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}