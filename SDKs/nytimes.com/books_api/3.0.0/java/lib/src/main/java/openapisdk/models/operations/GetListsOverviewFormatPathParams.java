package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListsOverviewFormatPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public GetListsOverviewFormatFormatEnum format;
    public GetListsOverviewFormatPathParams withFormat(GetListsOverviewFormatFormatEnum format) {
        this.format = format;
        return this;
    }
}