package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutSetupV1ServicesIdAvailabilityPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PutSetupV1ServicesIdAvailabilityPathParams withId(String id) {
        this.id = id;
        return this;
    }
}