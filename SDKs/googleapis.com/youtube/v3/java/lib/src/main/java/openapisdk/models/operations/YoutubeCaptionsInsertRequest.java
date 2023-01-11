package openapisdk.models.operations;



public class YoutubeCaptionsInsertRequest {
    public YoutubeCaptionsInsertQueryParams queryParams;
    public YoutubeCaptionsInsertRequest withQueryParams(YoutubeCaptionsInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public YoutubeCaptionsInsertRequests request;
    public YoutubeCaptionsInsertRequest withRequest(YoutubeCaptionsInsertRequests request) {
        this.request = request;
        return this;
    }
    public YoutubeCaptionsInsertSecurity security;
    public YoutubeCaptionsInsertRequest withSecurity(YoutubeCaptionsInsertSecurity security) {
        this.security = security;
        return this;
    }
}