package openapisdk.models.operations;



public class DataprocProjectsRegionsClustersGetResponse {
    public openapisdk.models.shared.Cluster cluster;
    public DataprocProjectsRegionsClustersGetResponse withCluster(openapisdk.models.shared.Cluster cluster) {
        this.cluster = cluster;
        return this;
    }
    public String contentType;
    public DataprocProjectsRegionsClustersGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DataprocProjectsRegionsClustersGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}