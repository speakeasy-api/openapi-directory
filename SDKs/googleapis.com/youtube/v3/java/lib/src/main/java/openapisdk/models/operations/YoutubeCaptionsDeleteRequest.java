package openapisdk.models.operations;



public class YoutubeCaptionsDeleteRequest {
    public YoutubeCaptionsDeleteQueryParams queryParams;
    public YoutubeCaptionsDeleteRequest withQueryParams(YoutubeCaptionsDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public YoutubeCaptionsDeleteSecurity security;
    public YoutubeCaptionsDeleteRequest withSecurity(YoutubeCaptionsDeleteSecurity security) {
        this.security = security;
        return this;
    }
}