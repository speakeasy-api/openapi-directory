package openapisdk.models.operations;



public class GetCommandsTypesResponse {
    public openapisdk.models.shared.CommandType[] commandTypes;
    public GetCommandsTypesResponse withCommandTypes(openapisdk.models.shared.CommandType[] commandTypes) {
        this.commandTypes = commandTypes;
        return this;
    }
    public String contentType;
    public GetCommandsTypesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCommandsTypesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}