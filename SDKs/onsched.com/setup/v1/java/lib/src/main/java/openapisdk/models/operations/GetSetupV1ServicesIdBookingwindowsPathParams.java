package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSetupV1ServicesIdBookingwindowsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetSetupV1ServicesIdBookingwindowsPathParams withId(String id) {
        this.id = id;
        return this;
    }
}