package openapisdk.models.operations;



public class ToolresultsProjectsHistoriesListRequest {
    public ToolresultsProjectsHistoriesListPathParams pathParams;
    public ToolresultsProjectsHistoriesListRequest withPathParams(ToolresultsProjectsHistoriesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ToolresultsProjectsHistoriesListQueryParams queryParams;
    public ToolresultsProjectsHistoriesListRequest withQueryParams(ToolresultsProjectsHistoriesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ToolresultsProjectsHistoriesListSecurity security;
    public ToolresultsProjectsHistoriesListRequest withSecurity(ToolresultsProjectsHistoriesListSecurity security) {
        this.security = security;
        return this;
    }
}