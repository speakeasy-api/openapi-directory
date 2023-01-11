package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=emailAddress")
    public String emailAddress;
    public GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusPathParams withEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
        return this;
    }
}