package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessverificationsLocationsFetchVerificationOptionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=location")
    public String location;
    public MybusinessverificationsLocationsFetchVerificationOptionsPathParams withLocation(String location) {
        this.location = location;
        return this;
    }
}