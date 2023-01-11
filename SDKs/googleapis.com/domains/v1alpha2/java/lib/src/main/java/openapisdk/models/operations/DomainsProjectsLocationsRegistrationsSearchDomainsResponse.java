package openapisdk.models.operations;



public class DomainsProjectsLocationsRegistrationsSearchDomainsResponse {
    public String contentType;
    public DomainsProjectsLocationsRegistrationsSearchDomainsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SearchDomainsResponse searchDomainsResponse;
    public DomainsProjectsLocationsRegistrationsSearchDomainsResponse withSearchDomainsResponse(openapisdk.models.shared.SearchDomainsResponse searchDomainsResponse) {
        this.searchDomainsResponse = searchDomainsResponse;
        return this;
    }
    public Long statusCode;
    public DomainsProjectsLocationsRegistrationsSearchDomainsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}