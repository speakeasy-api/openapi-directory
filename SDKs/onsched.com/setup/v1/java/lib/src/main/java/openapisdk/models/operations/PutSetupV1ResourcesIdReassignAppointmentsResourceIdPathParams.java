package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutSetupV1ResourcesIdReassignAppointmentsResourceIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PutSetupV1ResourcesIdReassignAppointmentsResourceIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resourceId")
    public String resourceId;
    public PutSetupV1ResourcesIdReassignAppointmentsResourceIdPathParams withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
}