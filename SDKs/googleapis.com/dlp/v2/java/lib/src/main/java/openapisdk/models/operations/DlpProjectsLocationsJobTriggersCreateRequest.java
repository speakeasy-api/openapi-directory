package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DlpProjectsLocationsJobTriggersCreateRequest {
    public DlpProjectsLocationsJobTriggersCreatePathParams pathParams;
    public DlpProjectsLocationsJobTriggersCreateRequest withPathParams(DlpProjectsLocationsJobTriggersCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DlpProjectsLocationsJobTriggersCreateQueryParams queryParams;
    public DlpProjectsLocationsJobTriggersCreateRequest withQueryParams(DlpProjectsLocationsJobTriggersCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GooglePrivacyDlpV2CreateJobTriggerRequestInput request;
    public DlpProjectsLocationsJobTriggersCreateRequest withRequest(openapisdk.models.shared.GooglePrivacyDlpV2CreateJobTriggerRequestInput request) {
        this.request = request;
        return this;
    }
    public DlpProjectsLocationsJobTriggersCreateSecurity security;
    public DlpProjectsLocationsJobTriggersCreateRequest withSecurity(DlpProjectsLocationsJobTriggersCreateSecurity security) {
        this.security = security;
        return this;
    }
}