package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SecuritycenterProjectsBigQueryExportsCreateRequest {
    public SecuritycenterProjectsBigQueryExportsCreatePathParams pathParams;
    public SecuritycenterProjectsBigQueryExportsCreateRequest withPathParams(SecuritycenterProjectsBigQueryExportsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SecuritycenterProjectsBigQueryExportsCreateQueryParams queryParams;
    public SecuritycenterProjectsBigQueryExportsCreateRequest withQueryParams(SecuritycenterProjectsBigQueryExportsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudSecuritycenterV1BigQueryExportInput request;
    public SecuritycenterProjectsBigQueryExportsCreateRequest withRequest(openapisdk.models.shared.GoogleCloudSecuritycenterV1BigQueryExportInput request) {
        this.request = request;
        return this;
    }
    public SecuritycenterProjectsBigQueryExportsCreateSecurity security;
    public SecuritycenterProjectsBigQueryExportsCreateRequest withSecurity(SecuritycenterProjectsBigQueryExportsCreateSecurity security) {
        this.security = security;
        return this;
    }
}