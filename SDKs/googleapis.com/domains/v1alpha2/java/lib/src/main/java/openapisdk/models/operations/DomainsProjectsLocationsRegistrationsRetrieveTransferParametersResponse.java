package openapisdk.models.operations;



public class DomainsProjectsLocationsRegistrationsRetrieveTransferParametersResponse {
    public String contentType;
    public DomainsProjectsLocationsRegistrationsRetrieveTransferParametersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RetrieveTransferParametersResponse retrieveTransferParametersResponse;
    public DomainsProjectsLocationsRegistrationsRetrieveTransferParametersResponse withRetrieveTransferParametersResponse(openapisdk.models.shared.RetrieveTransferParametersResponse retrieveTransferParametersResponse) {
        this.retrieveTransferParametersResponse = retrieveTransferParametersResponse;
        return this;
    }
    public Long statusCode;
    public DomainsProjectsLocationsRegistrationsRetrieveTransferParametersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}