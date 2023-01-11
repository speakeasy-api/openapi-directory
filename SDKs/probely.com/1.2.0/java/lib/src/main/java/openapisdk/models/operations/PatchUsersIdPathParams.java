package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchUsersIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PatchUsersIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}