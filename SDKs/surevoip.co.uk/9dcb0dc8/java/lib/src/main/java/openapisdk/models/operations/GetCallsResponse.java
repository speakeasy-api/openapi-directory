package openapisdk.models.operations;



public class GetCallsResponse {
    public String contentType;
    public GetCallsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCallsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.OneGetResponses200ContentApplication1jsonSchema oneGetResponses200ContentApplication1jsonSchema;
    public GetCallsResponse withOneGetResponses200ContentApplication1jsonSchema(openapisdk.models.shared.OneGetResponses200ContentApplication1jsonSchema oneGetResponses200ContentApplication1jsonSchema) {
        this.oneGetResponses200ContentApplication1jsonSchema = oneGetResponses200ContentApplication1jsonSchema;
        return this;
    }
    public openapisdk.models.shared.OneannouncementsPostResponses400ContentApplication1jsonSchema oneannouncementsPostResponses400ContentApplication1jsonSchema;
    public GetCallsResponse withOneannouncementsPostResponses400ContentApplication1jsonSchema(openapisdk.models.shared.OneannouncementsPostResponses400ContentApplication1jsonSchema oneannouncementsPostResponses400ContentApplication1jsonSchema) {
        this.oneannouncementsPostResponses400ContentApplication1jsonSchema = oneannouncementsPostResponses400ContentApplication1jsonSchema;
        return this;
    }
    public openapisdk.models.shared.OneannouncementsPostResponses403ContentApplication1jsonSchema oneannouncementsPostResponses403ContentApplication1jsonSchema;
    public GetCallsResponse withOneannouncementsPostResponses403ContentApplication1jsonSchema(openapisdk.models.shared.OneannouncementsPostResponses403ContentApplication1jsonSchema oneannouncementsPostResponses403ContentApplication1jsonSchema) {
        this.oneannouncementsPostResponses403ContentApplication1jsonSchema = oneannouncementsPostResponses403ContentApplication1jsonSchema;
        return this;
    }
}