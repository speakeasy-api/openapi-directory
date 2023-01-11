package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SearchconsoleUrlInspectionIndexInspectRequest {
    public SearchconsoleUrlInspectionIndexInspectQueryParams queryParams;
    public SearchconsoleUrlInspectionIndexInspectRequest withQueryParams(SearchconsoleUrlInspectionIndexInspectQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.InspectUrlIndexRequest request;
    public SearchconsoleUrlInspectionIndexInspectRequest withRequest(openapisdk.models.shared.InspectUrlIndexRequest request) {
        this.request = request;
        return this;
    }
    public SearchconsoleUrlInspectionIndexInspectSecurity security;
    public SearchconsoleUrlInspectionIndexInspectRequest withSecurity(SearchconsoleUrlInspectionIndexInspectSecurity security) {
        this.security = security;
        return this;
    }
}