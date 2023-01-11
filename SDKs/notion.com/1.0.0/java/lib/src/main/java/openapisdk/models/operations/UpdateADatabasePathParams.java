package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateADatabasePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public UpdateADatabasePathParams withId(String id) {
        this.id = id;
        return this;
    }
}