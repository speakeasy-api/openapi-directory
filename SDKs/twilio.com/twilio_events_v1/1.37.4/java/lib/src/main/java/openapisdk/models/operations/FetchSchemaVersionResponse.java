package openapisdk.models.operations;



public class FetchSchemaVersionResponse {
    public String contentType;
    public FetchSchemaVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchSchemaVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.EventsV1SchemaSchemaVersion eventsV1SchemaSchemaVersion;
    public FetchSchemaVersionResponse withEventsV1SchemaSchemaVersion(openapisdk.models.shared.EventsV1SchemaSchemaVersion eventsV1SchemaSchemaVersion) {
        this.eventsV1SchemaSchemaVersion = eventsV1SchemaSchemaVersion;
        return this;
    }
}