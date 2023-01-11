package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RetrieveAccountMetadataPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public RetrieveAccountMetadataPathParams withId(String id) {
        this.id = id;
        return this;
    }
}