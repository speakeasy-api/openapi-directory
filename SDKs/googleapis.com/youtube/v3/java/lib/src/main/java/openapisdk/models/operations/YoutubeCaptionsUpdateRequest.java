package openapisdk.models.operations;



public class YoutubeCaptionsUpdateRequest {
    public YoutubeCaptionsUpdateQueryParams queryParams;
    public YoutubeCaptionsUpdateRequest withQueryParams(YoutubeCaptionsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public YoutubeCaptionsUpdateRequests request;
    public YoutubeCaptionsUpdateRequest withRequest(YoutubeCaptionsUpdateRequests request) {
        this.request = request;
        return this;
    }
    public YoutubeCaptionsUpdateSecurity security;
    public YoutubeCaptionsUpdateRequest withSecurity(YoutubeCaptionsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}