package openapisdk.models.operations;



public class ListSchemaVersionResponse {
    public String contentType;
    public ListSchemaVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListSchemaVersionListSchemaVersionResponse listSchemaVersionResponse;
    public ListSchemaVersionResponse withListSchemaVersionResponse(ListSchemaVersionListSchemaVersionResponse listSchemaVersionResponse) {
        this.listSchemaVersionResponse = listSchemaVersionResponse;
        return this;
    }
    public Long statusCode;
    public ListSchemaVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}