package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSetupV1ServicesIdResourcesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=googleAuthReturnUrl")
    public String googleAuthReturnUrl;
    public GetSetupV1ServicesIdResourcesQueryParams withGoogleAuthReturnUrl(String googleAuthReturnUrl) {
        this.googleAuthReturnUrl = googleAuthReturnUrl;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Integer limit;
    public GetSetupV1ServicesIdResourcesQueryParams withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Integer offset;
    public GetSetupV1ServicesIdResourcesQueryParams withOffset(Integer offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=outlookAuthReturnUrl")
    public String outlookAuthReturnUrl;
    public GetSetupV1ServicesIdResourcesQueryParams withOutlookAuthReturnUrl(String outlookAuthReturnUrl) {
        this.outlookAuthReturnUrl = outlookAuthReturnUrl;
        return this;
    }
}