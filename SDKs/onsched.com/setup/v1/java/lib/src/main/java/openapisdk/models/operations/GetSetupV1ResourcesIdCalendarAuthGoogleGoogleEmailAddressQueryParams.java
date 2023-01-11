package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddressQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=googleAuthReturnUrl")
    public String googleAuthReturnUrl;
    public GetSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddressQueryParams withGoogleAuthReturnUrl(String googleAuthReturnUrl) {
        this.googleAuthReturnUrl = googleAuthReturnUrl;
        return this;
    }
}