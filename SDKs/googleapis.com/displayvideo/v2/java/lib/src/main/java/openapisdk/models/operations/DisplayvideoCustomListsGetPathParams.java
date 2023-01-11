package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoCustomListsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=customListId")
    public String customListId;
    public DisplayvideoCustomListsGetPathParams withCustomListId(String customListId) {
        this.customListId = customListId;
        return this;
    }
}