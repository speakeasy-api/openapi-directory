package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutSetupV1AppointmentsIdReassignResourceResourceIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PutSetupV1AppointmentsIdReassignResourceResourceIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resourceId")
    public String resourceId;
    public PutSetupV1AppointmentsIdReassignResourceResourceIdPathParams withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
}