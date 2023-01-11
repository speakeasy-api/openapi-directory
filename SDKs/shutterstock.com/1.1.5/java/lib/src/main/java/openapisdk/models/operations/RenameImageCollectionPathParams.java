package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RenameImageCollectionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public RenameImageCollectionPathParams withId(String id) {
        this.id = id;
        return this;
    }
}