package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutUsersIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PutUsersIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}