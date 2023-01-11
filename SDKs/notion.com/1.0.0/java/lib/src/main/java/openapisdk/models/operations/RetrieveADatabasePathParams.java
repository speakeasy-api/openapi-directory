package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RetrieveADatabasePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public RetrieveADatabasePathParams withId(String id) {
        this.id = id;
        return this;
    }
}