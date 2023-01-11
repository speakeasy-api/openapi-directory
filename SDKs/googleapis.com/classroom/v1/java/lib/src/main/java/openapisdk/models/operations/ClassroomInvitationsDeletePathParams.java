package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClassroomInvitationsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public ClassroomInvitationsDeletePathParams withId(String id) {
        this.id = id;
        return this;
    }
}