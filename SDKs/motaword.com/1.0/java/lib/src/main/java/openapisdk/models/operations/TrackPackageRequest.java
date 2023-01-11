package openapisdk.models.operations;



public class TrackPackageRequest {
    public TrackPackagePathParams pathParams;
    public TrackPackageRequest withPathParams(TrackPackagePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TrackPackageQueryParams queryParams;
    public TrackPackageRequest withQueryParams(TrackPackageQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}