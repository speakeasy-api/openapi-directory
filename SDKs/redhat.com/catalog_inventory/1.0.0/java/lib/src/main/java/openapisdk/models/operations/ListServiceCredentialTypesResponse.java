package openapisdk.models.operations;



public class ListServiceCredentialTypesResponse {
    public String contentType;
    public ListServiceCredentialTypesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ServiceCredentialTypesCollection serviceCredentialTypesCollection;
    public ListServiceCredentialTypesResponse withServiceCredentialTypesCollection(openapisdk.models.shared.ServiceCredentialTypesCollection serviceCredentialTypesCollection) {
        this.serviceCredentialTypesCollection = serviceCredentialTypesCollection;
        return this;
    }
    public Long statusCode;
    public ListServiceCredentialTypesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}