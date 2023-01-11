package openapisdk.models.operations;



public class DomainsProjectsLocationsRegistrationsRetrieveRegisterParametersResponse {
    public String contentType;
    public DomainsProjectsLocationsRegistrationsRetrieveRegisterParametersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RetrieveRegisterParametersResponse retrieveRegisterParametersResponse;
    public DomainsProjectsLocationsRegistrationsRetrieveRegisterParametersResponse withRetrieveRegisterParametersResponse(openapisdk.models.shared.RetrieveRegisterParametersResponse retrieveRegisterParametersResponse) {
        this.retrieveRegisterParametersResponse = retrieveRegisterParametersResponse;
        return this;
    }
    public Long statusCode;
    public DomainsProjectsLocationsRegistrationsRetrieveRegisterParametersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}