package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSetupV1ResourcesIdAvailabilityPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetSetupV1ResourcesIdAvailabilityPathParams withId(String id) {
        this.id = id;
        return this;
    }
}