package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutSetupV1ResourcesIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=googleAuthReturnUrl")
    public String googleAuthReturnUrl;
    public PutSetupV1ResourcesIdQueryParams withGoogleAuthReturnUrl(String googleAuthReturnUrl) {
        this.googleAuthReturnUrl = googleAuthReturnUrl;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=outlookAuthReturnUrl")
    public String outlookAuthReturnUrl;
    public PutSetupV1ResourcesIdQueryParams withOutlookAuthReturnUrl(String outlookAuthReturnUrl) {
        this.outlookAuthReturnUrl = outlookAuthReturnUrl;
        return this;
    }
}