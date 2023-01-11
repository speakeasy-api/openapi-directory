package openapisdk.models.operations;



public class DomainsProjectsLocationsRegistrationsRetrieveImportableDomainsResponse {
    public String contentType;
    public DomainsProjectsLocationsRegistrationsRetrieveImportableDomainsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RetrieveImportableDomainsResponse retrieveImportableDomainsResponse;
    public DomainsProjectsLocationsRegistrationsRetrieveImportableDomainsResponse withRetrieveImportableDomainsResponse(openapisdk.models.shared.RetrieveImportableDomainsResponse retrieveImportableDomainsResponse) {
        this.retrieveImportableDomainsResponse = retrieveImportableDomainsResponse;
        return this;
    }
    public Long statusCode;
    public DomainsProjectsLocationsRegistrationsRetrieveImportableDomainsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}