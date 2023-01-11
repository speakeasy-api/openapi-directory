package openapisdk.models.operations;



public class FetchSchemaResponse {
    public String contentType;
    public FetchSchemaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchSchemaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.EventsV1Schema eventsV1Schema;
    public FetchSchemaResponse withEventsV1Schema(openapisdk.models.shared.EventsV1Schema eventsV1Schema) {
        this.eventsV1Schema = eventsV1Schema;
        return this;
    }
}