package openapisdk.models.operations;



public class DownloadTracksRequest {
    public DownloadTracksPathParams pathParams;
    public DownloadTracksRequest withPathParams(DownloadTracksPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DownloadTracksSecurity security;
    public DownloadTracksRequest withSecurity(DownloadTracksSecurity security) {
        this.security = security;
        return this;
    }
}