package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AutoCheckInQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=emailAddress")
    public String emailAddress;
    public AutoCheckInQueryParams withEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
        return this;
    }
}