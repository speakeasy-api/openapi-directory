package openapisdk.models.operations;



public class DataprocProjectsRegionsClustersListResponse {
    public String contentType;
    public DataprocProjectsRegionsClustersListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListClustersResponse listClustersResponse;
    public DataprocProjectsRegionsClustersListResponse withListClustersResponse(openapisdk.models.shared.ListClustersResponse listClustersResponse) {
        this.listClustersResponse = listClustersResponse;
        return this;
    }
    public Long statusCode;
    public DataprocProjectsRegionsClustersListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}