package openapisdk.models.operations;



public class DeleteQshowRequest {
    public DeleteQshowQueryParams queryParams;
    public DeleteQshowRequest withQueryParams(DeleteQshowQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DeleteQshowSecurity security;
    public DeleteQshowRequest withSecurity(DeleteQshowSecurity security) {
        this.security = security;
        return this;
    }
}