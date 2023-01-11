package openapisdk.models.operations;



public class GetAcmeExternalAccountBindingResponse {
    public byte[] body;
    public GetAcmeExternalAccountBindingResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetAcmeExternalAccountBindingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object externalAccountBinding;
    public GetAcmeExternalAccountBindingResponse withExternalAccountBinding(Object externalAccountBinding) {
        this.externalAccountBinding = externalAccountBinding;
        return this;
    }
    public Long statusCode;
    public GetAcmeExternalAccountBindingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}