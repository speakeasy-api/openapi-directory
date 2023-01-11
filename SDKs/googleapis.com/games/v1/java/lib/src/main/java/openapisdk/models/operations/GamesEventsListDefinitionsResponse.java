package openapisdk.models.operations;



public class GamesEventsListDefinitionsResponse {
    public String contentType;
    public GamesEventsListDefinitionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EventDefinitionListResponse eventDefinitionListResponse;
    public GamesEventsListDefinitionsResponse withEventDefinitionListResponse(openapisdk.models.shared.EventDefinitionListResponse eventDefinitionListResponse) {
        this.eventDefinitionListResponse = eventDefinitionListResponse;
        return this;
    }
    public Long statusCode;
    public GamesEventsListDefinitionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}