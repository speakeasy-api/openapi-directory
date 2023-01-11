package openapisdk.models.operations;



public class DeleteVideoFromVodRequest {
    public DeleteVideoFromVodPathParams pathParams;
    public DeleteVideoFromVodRequest withPathParams(DeleteVideoFromVodPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteVideoFromVodSecurity security;
    public DeleteVideoFromVodRequest withSecurity(DeleteVideoFromVodSecurity security) {
        this.security = security;
        return this;
    }
}