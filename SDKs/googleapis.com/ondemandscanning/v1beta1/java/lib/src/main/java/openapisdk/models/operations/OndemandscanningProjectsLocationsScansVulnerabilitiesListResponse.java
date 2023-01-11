package openapisdk.models.operations;



public class OndemandscanningProjectsLocationsScansVulnerabilitiesListResponse {
    public String contentType;
    public OndemandscanningProjectsLocationsScansVulnerabilitiesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListVulnerabilitiesResponse listVulnerabilitiesResponse;
    public OndemandscanningProjectsLocationsScansVulnerabilitiesListResponse withListVulnerabilitiesResponse(openapisdk.models.shared.ListVulnerabilitiesResponse listVulnerabilitiesResponse) {
        this.listVulnerabilitiesResponse = listVulnerabilitiesResponse;
        return this;
    }
    public Long statusCode;
    public OndemandscanningProjectsLocationsScansVulnerabilitiesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}