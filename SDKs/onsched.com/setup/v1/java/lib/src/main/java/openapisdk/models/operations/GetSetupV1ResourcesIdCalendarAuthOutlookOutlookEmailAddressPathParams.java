package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressPathParams withId(String id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=outlookEmailAddress")
    public String outlookEmailAddress;
    public GetSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressPathParams withOutlookEmailAddress(String outlookEmailAddress) {
        this.outlookEmailAddress = outlookEmailAddress;
        return this;
    }
}