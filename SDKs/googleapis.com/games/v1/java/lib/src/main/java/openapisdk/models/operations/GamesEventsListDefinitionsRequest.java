package openapisdk.models.operations;



public class GamesEventsListDefinitionsRequest {
    public GamesEventsListDefinitionsQueryParams queryParams;
    public GamesEventsListDefinitionsRequest withQueryParams(GamesEventsListDefinitionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GamesEventsListDefinitionsSecurity security;
    public GamesEventsListDefinitionsRequest withSecurity(GamesEventsListDefinitionsSecurity security) {
        this.security = security;
        return this;
    }
}