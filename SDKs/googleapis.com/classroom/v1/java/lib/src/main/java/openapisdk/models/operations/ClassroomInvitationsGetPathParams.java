package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClassroomInvitationsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public ClassroomInvitationsGetPathParams withId(String id) {
        this.id = id;
        return this;
    }
}