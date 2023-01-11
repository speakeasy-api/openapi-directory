package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutSetupV1ResourcesIdAvailabilityPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PutSetupV1ResourcesIdAvailabilityPathParams withId(String id) {
        this.id = id;
        return this;
    }
}