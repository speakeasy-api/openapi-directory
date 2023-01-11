package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherEditsApklistingsUpdateRequest {
    public AndroidpublisherEditsApklistingsUpdatePathParams pathParams;
    public AndroidpublisherEditsApklistingsUpdateRequest withPathParams(AndroidpublisherEditsApklistingsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AndroidpublisherEditsApklistingsUpdateQueryParams queryParams;
    public AndroidpublisherEditsApklistingsUpdateRequest withQueryParams(AndroidpublisherEditsApklistingsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ApkListing request;
    public AndroidpublisherEditsApklistingsUpdateRequest withRequest(openapisdk.models.shared.ApkListing request) {
        this.request = request;
        return this;
    }
    public AndroidpublisherEditsApklistingsUpdateSecurity security;
    public AndroidpublisherEditsApklistingsUpdateRequest withSecurity(AndroidpublisherEditsApklistingsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}