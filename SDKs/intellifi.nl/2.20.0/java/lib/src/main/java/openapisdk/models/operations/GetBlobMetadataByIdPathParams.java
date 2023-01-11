package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBlobMetadataByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetBlobMetadataByIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}