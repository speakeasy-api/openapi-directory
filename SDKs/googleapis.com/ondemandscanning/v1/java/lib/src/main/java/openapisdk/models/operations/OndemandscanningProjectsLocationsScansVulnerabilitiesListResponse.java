package openapisdk.models.operations;



public class OndemandscanningProjectsLocationsScansVulnerabilitiesListResponse {
    public String contentType;
    public OndemandscanningProjectsLocationsScansVulnerabilitiesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListVulnerabilitiesResponseV1 listVulnerabilitiesResponseV1;
    public OndemandscanningProjectsLocationsScansVulnerabilitiesListResponse withListVulnerabilitiesResponseV1(openapisdk.models.shared.ListVulnerabilitiesResponseV1 listVulnerabilitiesResponseV1) {
        this.listVulnerabilitiesResponseV1 = listVulnerabilitiesResponseV1;
        return this;
    }
    public Long statusCode;
    public OndemandscanningProjectsLocationsScansVulnerabilitiesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}