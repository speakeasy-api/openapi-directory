package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=outlookAuthReturnUrl")
    public String outlookAuthReturnUrl;
    public GetSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressQueryParams withOutlookAuthReturnUrl(String outlookAuthReturnUrl) {
        this.outlookAuthReturnUrl = outlookAuthReturnUrl;
        return this;
    }
}