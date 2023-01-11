package openapisdk.models.operations;



public class DomainsProjectsLocationsRegistrationsGetResponse {
    public String contentType;
    public DomainsProjectsLocationsRegistrationsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Registration registration;
    public DomainsProjectsLocationsRegistrationsGetResponse withRegistration(openapisdk.models.shared.Registration registration) {
        this.registration = registration;
        return this;
    }
    public Long statusCode;
    public DomainsProjectsLocationsRegistrationsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}