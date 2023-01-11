package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DlpProjectsLocationsJobTriggersHybridInspectRequest {
    public DlpProjectsLocationsJobTriggersHybridInspectPathParams pathParams;
    public DlpProjectsLocationsJobTriggersHybridInspectRequest withPathParams(DlpProjectsLocationsJobTriggersHybridInspectPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DlpProjectsLocationsJobTriggersHybridInspectQueryParams queryParams;
    public DlpProjectsLocationsJobTriggersHybridInspectRequest withQueryParams(DlpProjectsLocationsJobTriggersHybridInspectQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GooglePrivacyDlpV2HybridInspectJobTriggerRequest request;
    public DlpProjectsLocationsJobTriggersHybridInspectRequest withRequest(openapisdk.models.shared.GooglePrivacyDlpV2HybridInspectJobTriggerRequest request) {
        this.request = request;
        return this;
    }
    public DlpProjectsLocationsJobTriggersHybridInspectSecurity security;
    public DlpProjectsLocationsJobTriggersHybridInspectRequest withSecurity(DlpProjectsLocationsJobTriggersHybridInspectSecurity security) {
        this.security = security;
        return this;
    }
}