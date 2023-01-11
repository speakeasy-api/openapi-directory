package openapisdk.models.operations;



public class ListServiceCredentialsResponse {
    public String contentType;
    public ListServiceCredentialsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ServiceCredentialsCollection serviceCredentialsCollection;
    public ListServiceCredentialsResponse withServiceCredentialsCollection(openapisdk.models.shared.ServiceCredentialsCollection serviceCredentialsCollection) {
        this.serviceCredentialsCollection = serviceCredentialsCollection;
        return this;
    }
    public Long statusCode;
    public ListServiceCredentialsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}