package openapisdk.models.operations;



public class DomainsProjectsLocationsRegistrationsListResponse {
    public String contentType;
    public DomainsProjectsLocationsRegistrationsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListRegistrationsResponse listRegistrationsResponse;
    public DomainsProjectsLocationsRegistrationsListResponse withListRegistrationsResponse(openapisdk.models.shared.ListRegistrationsResponse listRegistrationsResponse) {
        this.listRegistrationsResponse = listRegistrationsResponse;
        return this;
    }
    public Long statusCode;
    public DomainsProjectsLocationsRegistrationsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}