package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RenameVideoCollectionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public RenameVideoCollectionPathParams withId(String id) {
        this.id = id;
        return this;
    }
}