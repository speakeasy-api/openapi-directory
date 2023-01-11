package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddressPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=googleEmailAddress")
    public String googleEmailAddress;
    public GetSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddressPathParams withGoogleEmailAddress(String googleEmailAddress) {
        this.googleEmailAddress = googleEmailAddress;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddressPathParams withId(String id) {
        this.id = id;
        return this;
    }
}