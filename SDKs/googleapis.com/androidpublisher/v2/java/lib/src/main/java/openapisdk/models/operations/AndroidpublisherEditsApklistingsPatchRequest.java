package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherEditsApklistingsPatchRequest {
    public AndroidpublisherEditsApklistingsPatchPathParams pathParams;
    public AndroidpublisherEditsApklistingsPatchRequest withPathParams(AndroidpublisherEditsApklistingsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AndroidpublisherEditsApklistingsPatchQueryParams queryParams;
    public AndroidpublisherEditsApklistingsPatchRequest withQueryParams(AndroidpublisherEditsApklistingsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ApkListing request;
    public AndroidpublisherEditsApklistingsPatchRequest withRequest(openapisdk.models.shared.ApkListing request) {
        this.request = request;
        return this;
    }
    public AndroidpublisherEditsApklistingsPatchSecurity security;
    public AndroidpublisherEditsApklistingsPatchRequest withSecurity(AndroidpublisherEditsApklistingsPatchSecurity security) {
        this.security = security;
        return this;
    }
}