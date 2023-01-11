package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSetupV1CalendarsIdServicesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetSetupV1CalendarsIdServicesPathParams withId(String id) {
        this.id = id;
        return this;
    }
}