package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OndemandscanningProjectsLocationsScansAnalyzePackagesRequest {
    public OndemandscanningProjectsLocationsScansAnalyzePackagesPathParams pathParams;
    public OndemandscanningProjectsLocationsScansAnalyzePackagesRequest withPathParams(OndemandscanningProjectsLocationsScansAnalyzePackagesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public OndemandscanningProjectsLocationsScansAnalyzePackagesQueryParams queryParams;
    public OndemandscanningProjectsLocationsScansAnalyzePackagesRequest withQueryParams(OndemandscanningProjectsLocationsScansAnalyzePackagesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AnalyzePackagesRequestV1 request;
    public OndemandscanningProjectsLocationsScansAnalyzePackagesRequest withRequest(openapisdk.models.shared.AnalyzePackagesRequestV1 request) {
        this.request = request;
        return this;
    }
    public OndemandscanningProjectsLocationsScansAnalyzePackagesSecurity security;
    public OndemandscanningProjectsLocationsScansAnalyzePackagesRequest withSecurity(OndemandscanningProjectsLocationsScansAnalyzePackagesSecurity security) {
        this.security = security;
        return this;
    }
}