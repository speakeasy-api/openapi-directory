package openapisdk.models.operations;



public class GetPersonasIdResponse {
    public byte[] body;
    public GetPersonasIdResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetPersonasIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetPersonasIdResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.Persona persona;
    public GetPersonasIdResponse withPersona(openapisdk.models.shared.Persona persona) {
        this.persona = persona;
        return this;
    }
    public Long statusCode;
    public GetPersonasIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}